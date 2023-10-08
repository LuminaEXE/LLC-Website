<script setup lang="ts">
//@ts-ignore
import * as THREE from 'three'
import { onMounted } from 'vue';

onMounted(() => {
	ThreeComponents.getRenderer().then((renderer) => {
		document.getElementById('webGl')?.appendChild(renderer.domElement);
	});
	console.log('mounted', document.getElementById('webGl'));
});
</script>

<template>
	<div  id="fsLH">
		<canvas id="webGl"></canvas>
	</div>
</template>


<script lang="ts">
//@ts-ignore
import * as THREE from 'three';

const Components = {
	renderer: new THREE.WebGLRenderer({ antialias: true }),
	scene: new THREE.Scene(),
	camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
}

const Helpers = {
	axesHelper: new THREE.AxesHelper(5),
	gridHelper: new THREE.GridHelper(10, 10),
}

/* 
	Components
*/
Components.renderer.setSize(window.innerWidth, window.innerHeight);
Components.camera.position.z = 5;


/* 
	Scene
*/
Components.scene.add(Helpers.axesHelper);


Components.renderer.render(Components.scene, Components.camera)


console.log({
	Components,
	ComponentsRenderer: {
		ComponentsRenderer: Components.renderer,
		winH: window.innerHeight,
		winW: window.innerWidth,
	}

	
});

class ThreeComponents {
	static async getRenderer(): Promise<THREE.WebGLRenderer> {
		return Components.renderer;
	}
}

export default {
	name: 'ThreeJs',
}
</script>

<style>
	.fsLH { /* Fullscreen Length Height */
		height: 100vh;
		width: 100vw;
	}
</style>