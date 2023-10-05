<template>
    <div class="wrapper">
        <nav>
            <div class="appleNav">
                <ul>
                    <li>
                        <a><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" class="Moon"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg></a>
                    </li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Hobbies</a></li>
                    <li><a href="#">Achievements</a></li>
                    <li><a href="#">Contact</a></li>
                    <li class="right">
                        <a href="#"><img src="https://www.iconsdb.com/icons/preview/white/search-3-xxl.png" height="20"></a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">


export default {
    name: "Nav",
};

import { ref, computed } from 'vue'


const routes = {
  '/': Home,
  '/about': About
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

</script>

<style>

.Moon {
    fill:#ffffff
}

.wrapper {
    width: 100%;
    position: fixed;
    top:1%;
}

body {
    margin: 0;
}

nav {
    height: 44px;
    overflow: scroll;
    background: #3232322d;
    backdrop-filter: blur(10px);
}

nav ul {
    display: flex;
    height: 44px;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    margin: 0 auto;
    list-style-type: none;
}

nav .right {
    /* align right */
    justify-content: right;
    margin-left: 20;
}

nav li {}

nav a {
    display: block;
    color: white;
    font-size: 15px;
    font-weight: lighter;
    text-decoration: none;
    transition: 0.3s;
}

nav a:hover {
    color: #B8B8B8;
}

.appleNav {
    max-width: 980px;
    margin: 0 auto;
}
</style>
