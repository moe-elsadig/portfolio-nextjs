// import React, { useEffect, Suspense } from "react";

// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import * as THREE from "three";
// import * as dat from "dat.gui";

// export default function AnimatedBG({ project }) {
//   useEffect(() => {
//     const scene = new THREE.Scene();

//     // (view in degrees, aspect ratio, view frustrum, view frustrum)
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );

//     const canvas = document.querySelector("#bg");
//     camera.position.setZ(30);

//     const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
//     // no light bouncing off this type
//     // const material = new THREE.MeshBasicMaterial({
//     //   color: 0xff6347,
//     //   wireframe: true,
//     // });

//     // this type interacts with the lighting
//     const material = new THREE.MeshStandardMaterial({
//       color: 0xff6347,
//     });
//     const torus = new THREE.Mesh(geometry, material);

//     scene.add(torus);

//     const pointLight = new THREE.PointLight(0xffffff);
//     pointLight.position.set(20, 20, 20);

//     const ambientLight = new THREE.AmbientLight(0xffffff);
//     scene.add(pointLight, ambientLight);

//     const lightHelper = new THREE.PointLightHelper(pointLight);
//     const gridHelper = new THREE.GridHelper(200, 50);
//     scene.add(lightHelper, gridHelper);

//     function addStar() {
//       const geometry = new THREE.SphereGeometry(0.25, 24, 24);
//       const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
//       const star = new THREE.Mesh(geometry, material);

//       const [x, y, z] = Array(3)
//         .fill()
//         .map(() => THREE.MathUtils.randFloatSpread(100));

//       star.position.set(x, y, z);
//       scene.add(star);
//     }

//     Array(50).fill().forEach(addStar);

//     // const spaceTexture = new THREE.TextureLoader().load("/3d-assets/space.jpg");

//     // scene.background = spaceTexture;

//     const avatarTexture = new THREE.TextureLoader().load(
//       "/3d-assets/avatar.png"
//     );

//     const avatar = new THREE.Mesh(
//       new THREE.BoxGeometry(3, 3, 3),
//       new THREE.MeshBasicMaterial({ map: avatarTexture })
//     );

//     scene.add(avatar);

//     const moonTexture = new THREE.TextureLoader().load("/3d-assets/moon.jpg");
//     const normalTexture = new THREE.TextureLoader().load(
//       "/3d-assets/normal.jpg"
//     );

//     const moon = new THREE.Mesh(
//       new THREE.SphereGeometry(3, 32, 32),
//       new THREE.MeshStandardMaterial({
//         map: moonTexture,
//         normalMap: normalTexture,
//       })
//     );

//     scene.add(moon);

//     moon.position.z = 30;
//     moon.position.setX(-10);

//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvas,
//       alpha: true,
//     });

//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.outerHeight);
//     // renderer.setSize(100, 100);

//     // const controls = new OrbitControls(camera, renderer.domElement);

//     function moveCamera() {
//       const t = document.body.getBoundingClientRect().top;

//       moon.rotation.x += 0.05;
//       moon.rotation.y += 0.075;
//       moon.rotation.z += 0.05;

//       avatar.rotation.y += 0.01;
//       avatar.rotation.z += 0.01;

//       camera.position.z = t * -0.01;
//       camera.position.x = t * -0.0002;
//       camera.rotation.y = t * -0.0002;
//     }

//     document.body.onscroll = moveCamera;
//     moveCamera();

//     function animate() {
//       requestAnimationFrame(animate);

//       torus.rotation.x += 0.01;
//       torus.rotation.y += 0.005;
//       torus.rotation.z += 0.01;

//       // controls.update();

//       renderer.render(scene, camera);
//     }

//     animate();
//     return;
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 ">
//       {/* <Suspense fallback={<div></div>}> */}
//       <canvas id="bg" className=""></canvas>
//       {/* </Suspense> */}
//     </div>
//   );
// }
