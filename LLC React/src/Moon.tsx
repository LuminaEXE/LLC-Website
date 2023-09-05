import * as THREE from 'three';

//@ts-ignore
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//Get ViewPort size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// //Bloom imports
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';




//scne 
export const scene = new THREE.Scene();

export const geometry = new THREE.SphereGeometry( 3, 64, 64 ); 
export const material = new THREE.MeshStandardMaterial( 
  {
   map: new THREE.TextureLoader().load( '../public/moon.jpg' ),
  } 
); 
export const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );


//light
export const light = new THREE.PointLight(0xffffff, 40, 99, 5)
light.position.set(10,50,50)
scene.add(light)  

//camera
export const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height);
camera.position.z = 30
scene.add(camera);


//renderer
export const canvas = document.querySelector('.webgl') as HTMLCanvasElement;
export const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);


// //bloom
// const renderScene = new RenderPass( scene, camera );
// const bloomPass = new UnrealBloomPass(
//    new THREE.Vector2( sizes.width, sizes.height ), 
//    1.5, 
//    0.4, 
//    0.85 
// );

// bloomPass.threshold = 0;
// bloomPass.strength = 1.5;
// bloomPass.radius = 0.4;

// const composer = new EffectComposer( renderer );
// composer.setSize( sizes.width, sizes.height );
// composer.addPass( renderScene );
// composer.addPass( bloomPass );



//controls
export const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

//resize
window.addEventListener('resize', () => {
    //update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    //update camera
    camera.aspect = sizes.width/sizes.height;
    camera.updateProjectionMatrix();

    //update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
  }
)

//@ts-ignore
export function loop(code) {
  code();
}
function code() {
  controls.update();
  window.requestAnimationFrame(code);
  renderer.render(scene, camera);
}

loop(code);

import React, { Component } from 'react'

export default class Moon extends Component {
  render() {
    return (
      <div><canvas className="webgl"></canvas></div>
    )
  }
}
