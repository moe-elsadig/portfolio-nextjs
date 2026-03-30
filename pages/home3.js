import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import * as GeoTIFF from "geotiff";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
    () => import("react-leaflet").then((mod) => mod.MapContainer),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import("react-leaflet").then((mod) => mod.TileLayer),
    { ssr: false }
);
const useMapEvents = dynamic(
    () => import("react-leaflet").then((mod) => mod.useMapEvents),
    { ssr: false }
);
const ImageOverlay = dynamic(
    () => import("react-leaflet").then((mod) => mod.ImageOverlay),
    { ssr: false }
);

// Component to handle map click events
function MapClickHandler({ onMapClick }) {
    useMapEvents({
        click: (e) => {
            onMapClick(e.latlng);
        },
    });
    return null;
}

export default function MapTIFOverlay() {
    const [overlays, setOverlays] = useState([]);
    const [clickedPoint, setClickedPoint] = useState(null);
    const [pointValues, setPointValues] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const handleFileChange = async (e) => {
        const files = e.target.files;
        if (files.length === 0) return;

        setIsLoading(true);

        try {
            const newOverlays = [];

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const arrayBuffer = await file.arrayBuffer();
                const tiff = await GeoTIFF.fromArrayBuffer(arrayBuffer);
                const image = await tiff.getImage();
                const bbox = image.getBoundingBox();

                // Leaflet expects corners in [lat, lng] format
                // GeoTIFF typically provides [minX, minY, maxX, maxY]
                const bounds = [
                    [bbox[1], bbox[0]], // Southwest corner [lat, lng]
                    [bbox[3], bbox[2]], // Northeast corner [lat, lng]
                ];

                const width = image.getWidth();
                const height = image.getHeight();
                const rasters = await image.readRasters();

                newOverlays.push({
                    name: file.name,
                    bounds,
                    width,
                    height,
                    rasters,
                    file,
                });
            }

            setOverlays([...overlays, ...newOverlays]);
        } catch (error) {
            console.error("Error processing TIF file:", error);
            alert(
                "Error processing TIF file. Please make sure it's a valid GeoTIFF."
            );
        } finally {
            setIsLoading(false);
        }
    };

    const handleMapClick = async (latlng) => {
        setClickedPoint(latlng);

        if (overlays.length === 0) {
            setPointValues([]);
            return;
        }

        const values = [];

        for (const overlay of overlays) {
            try {
                // Convert the clicked point to pixel coordinates in the GeoTIFF
                const { bounds, width, height, rasters } = overlay;

                const latRatio =
                    (latlng.lat - bounds[0][0]) / (bounds[1][0] - bounds[0][0]);
                const lngRatio =
                    (latlng.lng - bounds[0][1]) / (bounds[1][1] - bounds[0][1]);

                if (
                    latRatio < 0 ||
                    latRatio > 1 ||
                    lngRatio < 0 ||
                    lngRatio > 1
                ) {
                    values.push({
                        name: overlay.name,
                        value: "Outside image bounds",
                    });
                    continue;
                }

                // Calculate pixel coordinates (y is inverted in most GeoTIFFs)
                const pixelX = Math.floor(lngRatio * width);
                const pixelY = Math.floor((1 - latRatio) * height);

                // Get the value at that pixel
                const pixelIndex = pixelY * width + pixelX;
                const value = rasters[0][pixelIndex];

                values.push({
                    name: overlay.name,
                    value: typeof value === "number" ? value.toFixed(6) : value,
                });
            } catch (error) {
                console.error("Error getting pixel value:", error);
                values.push({
                    name: overlay.name,
                    value: "Error retrieving value",
                });
            }
        }

        setPointValues(values);
    };

    const removeOverlay = (index) => {
        const newOverlays = [...overlays];
        newOverlays.splice(index, 1);
        setOverlays(newOverlays);
    };

    // Render GeoTIFF as a canvas and convert to data URL for Leaflet ImageOverlay
    const renderGeoTIFF = (overlay, index) => {
        const { bounds, width, height, rasters } = overlay;

        // Create a canvas to draw the GeoTIFF
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");

        // Create an ImageData object
        const imageData = ctx.createImageData(width, height);

        // Fill the ImageData
        for (let i = 0; i < width * height; i++) {
            // Calculate normalized value between 0 and 1
            const rasterData = rasters[0];
            const min = Math.min(...rasterData);
            const max = Math.max(...rasterData);
            const range = max - min;
            const normalizedValue =
                range === 0 ? 0 : (rasterData[i] - min) / range;

            // Apply a colormap (grayscale)
            const colorValue = Math.floor(normalizedValue * 255);

            // RGBA values
            imageData.data[i * 4] = colorValue;
            imageData.data[i * 4 + 1] = colorValue;
            imageData.data[i * 4 + 2] = colorValue;
            imageData.data[i * 4 + 3] = 180; // semi-transparent
        }

        ctx.putImageData(imageData, 0, 0);
        const dataUrl = canvas.toDataURL();

        return (
            <ImageOverlay
                key={`overlay-${index}`}
                url={dataUrl}
                bounds={bounds}
                opacity={0.7}
            />
        );
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold">GeoTIFF Map Overlay</h1>
                <div className="flex items-center mt-2 gap-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                        onClick={() => fileInputRef.current.click()}
                    >
                        Load TIF File
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".tif,.tiff"
                        className="hidden"
                        multiple
                    />
                    {isLoading && (
                        <span className="text-yellow-300">Loading...</span>
                    )}
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Map Container */}
                <div className="w-2/3 h-full relative">
                    <MapContainer
                        center={[0, 0]}
                        zoom={2}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {overlays.map((overlay, index) =>
                            renderGeoTIFF(overlay, index)
                        )}

                        <MapClickHandler onMapClick={handleMapClick} />

                        {clickedPoint && (
                            <div
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    bottom: "20px",
                                    transform: "translateX(-50%)",
                                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    padding: "8px",
                                    borderRadius: "4px",
                                    zIndex: 1000,
                                }}
                            >
                                Clicked: {clickedPoint.lat.toFixed(6)},{" "}
                                {clickedPoint.lng.toFixed(6)}
                            </div>
                        )}
                    </MapContainer>
                </div>

                {/* Sidebar */}
                <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">
                            Loaded Overlays
                        </h2>
                        {overlays.length === 0 ? (
                            <p className="text-gray-500">
                                No overlays loaded. Click &quot;Load TIF File&quot; to add
                                one.
                            </p>
                        ) : (
                            <ul className="space-y-2">
                                {overlays.map((overlay, index) => (
                                    <li
                                        key={`overlay-list-${index}`}
                                        className="bg-white p-3 rounded shadow"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium">
                                                {overlay.name}
                                            </span>
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() =>
                                                    removeOverlay(index)
                                                }
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-1">
                                            {overlay.width} × {overlay.height}{" "}
                                            pixels
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {clickedPoint && (
                        <div>
                            <h2 className="text-xl font-bold mb-2">
                                Point Values
                            </h2>
                            {pointValues.length === 0 ? (
                                <p className="text-gray-500">
                                    No data available at this point.
                                </p>
                            ) : (
                                <div className="bg-white p-3 rounded shadow">
                                    <div className="font-medium mb-2">
                                        At {clickedPoint.lat.toFixed(6)},{" "}
                                        {clickedPoint.lng.toFixed(6)}:
                                    </div>
                                    <ul className="space-y-1">
                                        {pointValues.map((item, index) => (
                                            <li
                                                key={`value-${index}`}
                                                className="text-sm"
                                            >
                                                <span className="font-medium">
                                                    {item.name}:
                                                </span>{" "}
                                                {item.value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
