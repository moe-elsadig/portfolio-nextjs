module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "github.com",
      "raw.githubusercontent.com",
      "images.pexels.com",
    ],
  },
  env: {
    mapbox_key: process.env.MAPBOX_KEY || "",
  },
  crossOrigin: "anonymous",
};
