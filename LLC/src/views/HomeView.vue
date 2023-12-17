<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
// @ts-ignore
import anime from '../../node_modules/animejs/lib/anime.es.js';
import Home from "../components/Home.vue"
//@ts-ignore
import TypeWriter from "../TS/TypeWriter.ts"
//@ts-ignore
import Rellax from "rellax";
import Cards from "../components/Cards.vue"

import LOG from "../components/LOG"

onMounted(() => {
  /* Observer for the cards */
  let $disp = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !$disp) {
        anime({targets: '.hTitle', opacity: [0, 1],translateY: [100,0], duration: 1000, easing: 'easeInOutQuad'})
        $disp = true;
      } /* disapear whe leaving view */
      else if (!entry.isIntersecting && $disp) {
        anime({targets: '.hTitle', opacity: [1, 0], translateY: [0, 100], duration: 1000, easing: 'easeInOutQuad'})
        $disp = false;
      }
    });
  });

  //@ts-ignore
  //  observer.observe(document.querySelector(".hTitle"));

  //initate rellax parallax
  let rellax = new Rellax('.rellax');

  onUnmounted(() => {
    setTimeout(() => {
      // reload page
      window.location.reload()
    }, 0);
  })
  let twPromise = TypeWriter.write(
    "‎ I'm Sachman", 
    100, 
    document.getElementById("titleText"), 
    true, 
    1600, 
    () => {
      anime ({
        targets: '.subT',
        opacity: [0, 1],
        duration: 1000,
        delay: 1600,
        easing: 'easeInOutQuad',
      })
    }
  )


  TypeWriter.removeElement(document.querySelector(".gradient"), 1400)

  anime({
    targets: '.gradient',
    translateY: {
      value: [100, 0],
      duration: 1200,
    },
    opacity: [
      {
        value: [0, 1],
        duration: 200,
        easing: 'easeInOutQuad',
      },
      {
        value: [1, 0],
        duration: 100,
        delay: 1000,
        easing: 'spring(1, 80, 10, 10)',
      },
    ],
    scale: {
      value: [1, 1500],
      duration: 1000,
      easing: 'easeInOutQuad',
      delay: 1200,
    },
    duration: 4000,
    easing: 'spring(1, 80, 10, 10)',
  })
})


</script> 

<template>
  <main>
    <div class="txt">
      <h1 class="Title">
        <span class="gradient">Hey!</span>
        <span @click="()=>{LOG.test()}" id="titleText" class="rellax" data-rellax-speed="-4" data-rellax-zindex="0"
          @mouseover="() => {
            anime(
              {
                targets: '#titleText',
                color: {
                  value: '#E0B0FF',
                  duration: 1000
                },
                filter:
                {
                  value: [
                    'drop-shadow(1px 0px 0px #E0B0FF)',
                    'drop-shadow(1px 0px 70px #E0B0FF)'
                  ],
                  duration: 1000
                }
              }
            );
          }" 
          @mouseleave="() => {
              anime(
                {
                  targets: '#titleText',
                  color: '#fff',
                  filter: [
                    'drop-shadow(0px 0px 0px #fff)',
                    'drop-shadow(0px 0px 70px #fff)'
                  ]
                }
              );
          }"
        ></span>
      </h1>
      <p class="subT rellax" data-rellax-speed="-4.8" data-rellax-zindex="0">Scroll to view more</p>
    </div>
    <div id="moonX"><img src="../assets/moon.png" width="1200" class="rellax"  data-rellax-speed="-1" data-rellax-zindex="20"/></div>

    <div class="abMe">
      <h1 class="aTitle rellax" data-rellax-speed="-4">About Me</h1>
      <img src="../../public/me.jpeg" class="pfp rellax" data-rellax-speed="-3" data-rellax-zindex="0" />
    </div>
    <h1 style=" margin-top: 157rem;"> and tahjuidshaukyhdkuays</h1>
  </main>
</template>

<script lang="ts">
export default {
  name: "Home"
}



</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

.abMe {
  position: absolute;
  top: 150%;
  width: 100%;
}

.pfp {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 400px;
  height: 400px;
  z-index: 10;
  border: 2px solid #ffffff;
  filter: drop-shadow(0px 0px 2px #ffffff);
  fill: #ffffff;
  position: absolute;
  top: 125%;
  left: -20%;
}

.subT {
  font-size: 1.5rem;
  margin-top: 13rem;
  color: #888;
  opacity: 0;
}
#moonX {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-48%, 7%);
  z-index: 10;
}

.aTitle {
  font-size: 4rem;
  text-align: center;
  margin-top: 5rem;
  background-color: none;
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-left: -6rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 12%;
  margin-bottom: 99px;
}

.cardW {
  position: absolute;
  width: 100%;
  display: grid;
  top: 120%;
}
.Home {
  padding: 20px;
  background-image: url("../imgs/rari.JPG");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px white;
  filter: drop-shadow(0px 0px 2px #ffffff);
  fill: #ffffff;
  border-radius: 20px;
  width: 400px;
  height: 400px;
  grid-column: 1 / 2;
}
.Home h1 {
  font-size: 2rem;
  margin-left: 1rem;
  font-family: "Poppins", sans-serif;
  color: #00000082;
  text-align: left;
  background-color: none;
  font-family: "Poppins", sans-serif;
  text-align: center;
  position: absolute;
  left: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(45deg, #ffffff, #d5d5d5);
  -webkit-background-clip: text;
  filter: drop-shadow(2px 2px 3px #000000);
}


.txt {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  color: #ffffff;
  text-align: center;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
}

#titleText {
  border-right: 1px solid #760adb;
  padding-right: 1rem;
  border-width: 3px;
  animation: txt-Caret 0.5s steps(1) infinite;
}

@keyframes txt-Caret {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: #760adb;
  }
}

.Title {
  font-size: 4rem;
  text-align: center;
  margin-top: 5rem;
  background-color: none;
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-left: -1rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gradient {
  background: -webkit-linear-gradient(0deg, #760adb, #e73c7e);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4rem;
}




</style>