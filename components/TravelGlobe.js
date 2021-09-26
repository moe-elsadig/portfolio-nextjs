import { get } from "lodash";
import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// import mapDark from "/globe/earth-dark.jpg";
// import mapTopology from "/globe/earth-topology.jpg";

function TravelGlobe() {
  useEffect(() => {
    example();
  }, []);

  const example = () => {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    camera.updateProjectionMatrix();

    const canvas = document.getElementById("travel-globe-canvas");
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    var geometry = new THREE.SphereBufferGeometry(1, 30, 30);
    var material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("/globe/earth-map.jpg"),
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    var globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // add pins

    let cities = [
      {
        city: "Khartoum",
        lat: 15.5007,
        lon: 32.5599,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Cairo",
        lat: 30.0444,
        lon: 31.2357,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Kuala Lumpur",
        lat: 3.139,
        lon: 101.6869,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "London",
        lat: 51.5074,
        lon: -0.1278,
        latHeading: "W",
        longerHeading: "N",
      },
      {
        city: "Paris",
        lat: 48.8566,
        lon: 2.3522,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Nairobi",
        lat: -1.2921,
        lon: 36.8219,
        latHeading: "E",
        longerHeading: "S",
      },
      {
        city: "Orlando",
        lat: 28.5384,
        lon: -81.3789,
        latHeading: "W",
        longerHeading: "N",
      },
      {
        city: "DC",
        lat: 38.9072,
        lon: -77.0369,
        latHeading: "W",
        longerHeading: "N",
        color: 0xff0000,
      },
      {
        city: "Istanbul",
        lat: 41.0082,
        lon: 28.9784,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Pietermaritzburg",
        lat: -29.6006,
        lon: 30.3794,
        latHeading: "E",
        longerHeading: "S",
      },
      {
        city: "Addis Ababa",
        lat: 8.9806,
        lon: 38.7578,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Riyadh",
        lat: 24.7136,
        lon: 46.6753,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Jeddah",
        lat: 21.4858,
        lon: 39.1925,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Mecca",
        lat: 21.3891,
        lon: 39.8579,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Amman",
        lat: 31.9539,
        lon: 31.9539,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Accra",
        lat: 5.6037,
        lon: -0.187,
        latHeading: "W",
        longerHeading: "N",
      },
      {
        city: "Yaounde",
        lat: 3.848,
        lon: 11.5021,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Brazzaville",
        lat: -4.2634,
        lon: 15.2429,
        latHeading: "E",
        longerHeading: "S",
      },
      {
        city: "Libreville",
        lat: 0.4162,
        lon: 9.4673,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Dakar",
        lat: 14.7167,
        lon: -17.4677,
        latHeading: "W",
        longerHeading: "N",
      },
      {
        city: "Ispra, Varese",
        lat: 45.814,
        lon: 8.6121,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Milan",
        lat: 45.4642,
        lon: 9.19,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Tehran",
        lat: 35.6892,
        lon: 51.389,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Isfahan",
        lat: 32.6539,
        lon: 51.666,
        latHeading: "E",
        longerHeading: "N",
      },
      {
        city: "Mashhad",
        lat: 36.2605,
        lon: 59.6168,
        latHeading: "E",
        longerHeading: "N",
      },
    ];

    let cityCoordinates = [];

    function convertCoordinates(city) {
      let x = 0;
      let y = 0;
      let z = 1;

      let lat = city.lat;
      let lon = city.lon;
      let phi = ((90 - lat) * Math.PI) / 180;
      let theta = ((lon + 180) * Math.PI) / 180;
      x = -(Math.sin(phi) * Math.cos(theta));
      z = Math.sin(phi) * Math.sin(theta);
      y = Math.cos(phi);

      console.log(x, y, z);
      cityCoordinates.push([x, y, z]);

      return [x, y, z];
    }

    cities.forEach((city) => {
      console.log("adding:", city.city);

      var randomColor = Number(
        "0x" + Math.floor(Math.random() * 16777215).toString(16)
      );

      let pin = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.03, 20, 20),
        new THREE.MeshBasicMaterial({
          color: randomColor,
        })
      );

      let [x, y, z] = convertCoordinates(city);

      console.log(x, y, z);
      pin.position.set(x, y, z);
      scene.add(pin);
    });

    function getCurve(p1, p2) {
      var randomColor = Number(
        "0x" + Math.floor(Math.random() * 16777215).toString(16)
      );

      let [x1, y1, z1] = p1;
      let [x2, y2, z2] = p2;

      let v1 = new THREE.Vector3(x1, y1, z1);
      let v2 = new THREE.Vector3(x2, y2, z2);
      const lineRes = 20;
      let points = [];
      for (let i = 0; i <= lineRes; i++) {
        let p = new THREE.Vector3().lerpVectors(v1, v2, i / lineRes);
        p.normalize();
        p.multiplyScalar(1 + 0.1 * Math.sin((Math.PI * i) / lineRes));
        points.push(p);
      }

      const path = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(path, 20, 0.01, 8, false);
      const material = new THREE.MeshBasicMaterial({ color: randomColor });
      const arc = new THREE.Mesh(geometry, material);
      scene.add(arc);
    }

    // all cities connected
    // for (let i = 0; i < cities.length; i++) {
    //   for (let j = 0; j < cities.length; j++) {
    //     if (i !== j) {
    //       getCurve(cityCoordinates[i], cityCoordinates[j]);
    //     }
    //   }
    // }

    // connected based on sudan
    for (let i = 1; i < cities.length; i++) {
      getCurve(cityCoordinates[0], cityCoordinates[i]);
    }

    // getCurve(cityCoordinates[0], cityCoordinates[1]);

    var animate = function () {
      requestAnimationFrame(animate);
      scene.rotation.x = 0.26;
      scene.rotation.y -= 0.03;

      controls.update();

      renderer.render(scene, camera);
    };
    animate();
  };

  return (
    <div>
      <div id="globeViz"></div>
      <canvas id="travel-globe-canvas"></canvas>
    </div>
  );
}

export default TravelGlobe;
