// useEffect(() => {
//   // Debug
//   const gui = new dat.GUI();

//   // Canvas
//   const canvas = document.querySelector("canvas.webgl");

//   // Scene
//   const scene = new THREE.Scene();

//   // phone
//   const gltfLoader = new GLTFLoader();
//   gltfLoader.load("/3d-assets/untitled.gltf", (gltf) => {
//     gltf.scene.scale.set(0.3, 0.3, 0.3);
//     gltf.scene.rotation.set(0, 4.3, 0);
//     scene.add(gltf.scene);

//     gui.add(gltf.scene.rotation, "x").min(0).max(9);
//     gui.add(gltf.scene.rotation, "y").min(0).max(9);
//     gui.add(gltf.scene.rotation, "z").min(0).max(9);
//   });

//   // Lights

//   const ambientLight = new THREE.AmbientLight(0xffffff, 1);
//   ambientLight.position.x = 2;
//   ambientLight.position.y = 3;
//   ambientLight.position.z = 4;
//   scene.add(ambientLight);

//   /**
//    * Sizes
//    */
//   const sizes = {
//     width: window.innerWidth / 5,
//     height: window.innerHeight / 5,
//   };

//   window.addEventListener("resize", () => {
//     // Update sizes
//     sizes.width = window.innerWidth / 5;
//     sizes.height = window.innerHeight / 5;

//     // Update camera
//     camera.aspect = sizes.width / sizes.height;
//     camera.updateProjectionMatrix();

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//   });

//   /**
//    * Camera
//    */
//   // Base camera
//   const camera = new THREE.PerspectiveCamera(
//     75,
//     sizes.width / sizes.height,
//     0.1,
//     100
//   );
//   camera.position.x = 0;
//   camera.position.y = 0;
//   camera.position.z = 1;
//   scene.add(camera);

//   // Controls
//   const controls = new OrbitControls(camera, canvas);
//   controls.enableDamping = true;

//   /**
//    * Renderer
//    */
//   const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     alpha: true,
//   });
//   renderer.setSize(sizes.width, sizes.height);
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//   /**
//    * Animate
//    */

//   const clock = new THREE.Clock();

//   const tick = () => {
//     const elapsedTime = clock.getElapsedTime();

//     // Update objects
//     // sphere.rotation.y = 0.5 * elapsedTime;

//     // Update Orbital Controls
//     controls.update();

//     // Render
//     renderer.render(scene, camera);

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick);
//   };

//   tick();
// }, []);
