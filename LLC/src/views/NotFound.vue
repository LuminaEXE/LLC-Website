<script setup lang="ts">
//@ts-ignore
import anime from '../../node_modules/animejs/lib/anime.es.js';
import { onMounted } from 'vue';

onMounted(() => {
	anime({
		targets: '.notFound h1',
		translateY: [-100, 0],
		opacity: [0, 1],
		duration: 200,
		easing: 'spring(1, 20, 10, 0)',
		delay: 100,
	})
	anime({
		targets: '.notFound h2',
		translateY: [100, 0],
		opacity: [0, 1],
		duration: 400,
		easing: 'spring(1, 20, 10, 0)',
		delay: 100,
	})
	anime({
		targets: '.notFound p',
		translateY: [100, 0],
		opacity: [0, 1],
		duration: 100,
		easing: 'spring(1, 20, 10, 0)',
		delay: 200,
	})
});
</script>

<template>
	<div class="notFound">
		<h1>404</h1>
		<h2>Page not found</h2>
		<p>Sorry, the page you're looking for doesn't exist.</p>
	</div>
</template>

<script lang="ts">
export default {
	name: 'NotFound',
}



</script>

<style scoped>
.notFound {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
}

.notFound h1 {
	font-size: 5rem;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-image: linear-gradient(to right, #0a26db, #ffffff);
	background-clip: text;
}

.notFound h2 {
	font-size: 2rem;
	margin-bottom: 1rem;
}

.notFound p {
	font-size: 1rem;
}</style>