import { get } from "lodash";
import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { FlakesTexture } from "three/examples/jsm/textures/FlakesTexture";
// import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// import mapDark from "/globe/earth-dark.jpg";
// import mapTopology from "/globe/earth-topology.jpg";

// city information to be mapped
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
    city: "Doha",
    lat: 25.286106,
    lon: 51.534817,
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
    city: "Adapazarı",
    lat: 40.7889,
    lon: 30.406,
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
    city: "Port Sudan",
    lat: 19.5903,
    lon: 37.1902,
    latHeading: "E",
    longerHeading: "N",
  },
  {
    city: "Medina",
    lat: 24.470901,
    lon: 39.612236,
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
  {
    city: "Abidjan",
    lat: 5.36,
    lon: -4.0083,
    latHeading: "W",
    longerHeading: "N",
  },
];

function TravelGlobe({ dimensions }) {
  useEffect(() => {
    // run the three.js functions
    renderContent();
  }, []);

  const renderContent = () => {
    // === THREE.JS CODE START ===
    // initialise scene & camera
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(30);
    camera.aspect = 1;
    camera.position.z = 5;
    camera.updateProjectionMatrix();

    // the grouping of the elements that will rotate along the y axis
    let pivot = new THREE.Group();
    scene.add(pivot);

    // second lighting option
    pivot.add(new THREE.AmbientLight(0xbbbbbb));
    pivot.add(new THREE.DirectionalLight(0xffffff, 0.6));

    // append and render the scene to the canvas element in DOM
    const canvas = document.getElementById("travel-globe-canvas");
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
      antialias: true,
    });
    let renderSize = Math.min(window.innerWidth, window.innerHeight);
    renderer.setSize(renderSize, renderSize);

    // allow user to interact with the globe by initialising orbit controls
    // comment out to stop it
    const controls = new OrbitControls(camera, renderer.domElement);

    // setup the sphere where the globe image will be projected onto
    var geometry = new THREE.SphereBufferGeometry(1, 32, 32);
    // load the image as a color map and use it as a mesh material
    var materialShader = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("/globe/earth-map.jpg"),
    });
    // add the globe element (the sphere and map material) to the pivot group
    var globe = new THREE.Mesh(geometry, materialShader);
    pivot.add(globe);

    // material shader with a unique look for the points and arcs
    // Based off: http://stemkoski.blogspot.fr/2013/07/shaders-in-threejs-glow-and-halo.html
    const fragmentShader = `
    uniform vec3 color;
    uniform float coefficient;
    uniform float power;
    varying vec3 vVertexNormal;
    varying vec3 vVertexWorldPosition;
    void main() {
      vec3 worldCameraToVertex = vVertexWorldPosition - cameraPosition;
      vec3 viewCameraToVertex	= (viewMatrix * vec4(worldCameraToVertex, 0.0)).xyz;
      viewCameraToVertex = normalize(viewCameraToVertex);
      float intensity	= pow(
        coefficient + dot(vVertexNormal, viewCameraToVertex),
        power
      );
      gl_FragColor = vec4(color, intensity);
    }`;
    const vertexShader = `
    varying vec3 vVertexWorldPosition;
    varying vec3 vVertexNormal;
    void main() {
      vVertexNormal	= normalize(normalMatrix * normal);
      vVertexWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
    `;
    function createGlowMaterial(coefficient, color, power) {
      return new THREE.ShaderMaterial({
        depthWrite: false,
        fragmentShader,
        transparent: true,
        uniforms: {
          coefficient: {
            value: coefficient,
          },
          color: {
            value: new THREE.Color(color),
          },
          power: {
            value: power,
          },
        },
        vertexShader,
      });
    }

    // create a fixed city marker at each location and add to pivot group
    let cityCoordinates = [];
    cities.forEach((city) => {
      // tooltip starting point https://stackoverflow.com/questions/39177205/threejs-tooltip/54438811

      var randomColor = Number(
        "0x" + Math.floor(Math.random() * 16777215).toString(16)
      );

      let pin = new THREE.Mesh(
        new THREE.SphereBufferGeometry(0.01, 10, 10),
        new THREE.MeshBasicMaterial({
          color: randomColor,
        })
        // createGlowMaterial(2, "gold", 1)
      );

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

        // console.log(x, y, z);
        cityCoordinates.push([x, y, z]);

        return [x, y, z];
      }

      let [x, y, z] = convertCoordinates(city);
      pin.position.set(x, y, z);
      pivot.add(pin);
    });

    // a group for arcs because of independant animations
    let arcs = new THREE.Group();
    pivot.add(arcs);

    // create flight arcs connecting the different cities
    function getCurve(p1, p2) {
      // segments in each arc
      const lineRes = 200;

      // random arc colour
      var randomColor = Number(
        "0x" + Math.floor(Math.random() * 16777215).toString(16)
      );

      // spherical cartesian position to three.js vectors
      let [x1, y1, z1] = p1;
      let [x2, y2, z2] = p2;
      let v1 = new THREE.Vector3(x1, y1, z1);
      let v2 = new THREE.Vector3(x2, y2, z2);

      // extract the vector points between the two city positions
      let points = [];
      for (let i = 0; i < lineRes; i++) {
        let p = new THREE.Vector3().lerpVectors(v1, v2, i / lineRes);
        p.normalize();
        p.multiplyScalar(1 + 0.1 * Math.sin((Math.PI * i) / lineRes));
        points.push(p);
      }

      // create the arc geometry using the calculated points
      const path = new THREE.CatmullRomCurve3(points);
      const geometry = new THREE.TubeGeometry(path, 64, 0.005, 8, false);
      const arc = new THREE.Mesh(
        geometry,
        createGlowMaterial(1.2, randomColor, 1)
      );
      arc.needsUpdate = true;

      let time = 0;
      let rangeEnd = 0;
      let fpsInterval = 3000;
      let start = Date.now();
      function animateArc() {
        requestAnimationFrame(() => {
          time = (Date.now() - start) % fpsInterval;
          time = time / fpsInterval; // normalise
          let maxL = 4000;

          function easeInOutCubic(x) {
            return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
          }

          rangeEnd = maxL * easeInOutCubic(time);

          let flightTrail =
            rangeEnd < maxL / 2
              ? 0
              : rangeEnd < maxL
              ? rangeEnd - maxL * easeInOutCubic(time)
              : 0;
          arc.geometry.setDrawRange(flightTrail, rangeEnd);
          animateArc();
        });
      }

      let randomDelay = Math.floor(Math.random() * 20);
      setTimeout(() => {
        // console.log("randomDelay", randomDelay);
        // animateArc();
      }, randomDelay * 1000);

      arcs.add(arc);
    }

    // generate arcs
    for (let i = 1; i < cityCoordinates.length; i++) {
      // for (let j = 1; j < cityCoordinates.length; j++) {
      //   if (i !== j) {
      let randomDirection = Math.floor(Math.random() * 2);
      if (randomDirection === 1) {
        getCurve(cityCoordinates[i], cityCoordinates[0]);
      } else {
        getCurve(cityCoordinates[0], cityCoordinates[i]);
      }
      //   }
      // }
    }

    // pivot.rotation.y -= 2.1;
    pivot.rotation.x += 0.2;
    var animate = function () {
      requestAnimationFrame(animate);
      pivot.rotation.y -= 0.0005;
      renderer.render(scene, camera);
    };

    animate();
  };

  return (
    <canvas
      className="relative w-full h-full"
      id="travel-globe-canvas"
    ></canvas>
  );
}

export default TravelGlobe;
