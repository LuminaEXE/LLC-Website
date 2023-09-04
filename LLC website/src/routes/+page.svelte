<script>
// @ts-nocheck

  import { onMount } from "svelte";
  import Page from "./Education/+page.svelte";

  /**
   * @param {any} name
   * @param {any} anim
   */
  function assignAnim(name, anim) {
    let el = document.querySelector(name);
    el.style.animation = anim;
  }

  onMount(() => {
    setTimeout(() => {
      assignAnim(".paragraph", "fade 2s ease-in-out");

      var i = 0;
      var txt = "I'm a Sophomore at New Tech High School @  Coppell.";
      var speed = 60;

      function typeWriter() {
        if (i < txt.length) {
          let title = document.querySelector(".paragraph");

          if (i == 27) {
            // @ts-ignore
            title.innerHTML += "<br>";
          } else {
            // @ts-ignore
            title.innerHTML += txt.charAt(i);
          }
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      typeWriter();
    }, 500);
  });
</script>

<!-- Title -->
<div>
  <!-- svelte-ignore a11y-missing-content -->
  <h1 class="title">Hey, I'm <span class="gradient">Sachman.</span></h1>
  <p class="paragraph" />
  <button class="btnInf" on:click={
    () => {
      window.scrollTo({
        left: 0,
        top: 1000,
        behavior: "smooth",
      });
    }}>More info!</button>
</div>
<div class="imgMe">
  <!-- svelte-ignore a11y-missing-attribute -->
  <img
    src="https://cdn.discordapp.com/attachments/1047367033215533087/1148333313593974865/IMG_1841.jpg"
    width="800"
    height="600"
    class="imgM"
  />
</div>

<div class="abtMe">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <h2 class="abtTitle" >About me</h2>
</div>

<div id="Header">
  <header class="site-header">
    
    <div class="site-identity">
      <img src="https://i.imgur.com/srWnyyy.png" width="60" height="60"/>
      <h1><a href="/">Sachman's LLC Portfolio</a></h1>
    </div>
    <nav class="site-navigation">
      <ul class="nav">
        <li><a href="/Education">Education</a></li>
        <li><a href="/Family">Family</a></li>
        <li><a href="/Hobbies">Hobbies</a></li>
      </ul>
    </nav>
    <!-- create hamburger menu -->
    <div class="menu">
      <div class="line1" />
      <div class="line2" />
      <div class="line3" />
    </div>
  </header>
</div>

<style lang="scss">

  .abtTitle {
    font-family: "Poppins", sans-serif;
    position: absolute;
    top: 5%;
    left: 5%;
    font-size: 2.7em;
    animation: fade-bottom 2s ease-in-out;
  }

  .abtMe {
    position: absolute;
    top: 100%;
    left: 0%;
    width: 90%;
    height: 100%;
    background-color: #ffffff;
    animation: fade-bottom 2s ease-in-out;
  }

  .imgMe {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
  }
  .imgM {
    border-radius: 20px;
    opacity: 25;
    animation: fade-bottom 2s ease-in-out;
  }

  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #292929 #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 15px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #292929;
    border-radius: 8px;
    border: 3px solid #ffffff;
  }
  @import url("https://fonts.googleapis.com/css2?family=Poppins");

  #Header {
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    margin-bottom: 1em;
    top: 0;
  }

  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 2.5rem;
    background-color: rgb(98, 97, 97);
  }
  .gradient {
    background: linear-gradient(90deg, #9900ff, #1bb116);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: bold;
  }

  .paragraph {
    font: 1.2em "Poppins", sans-serif;
    color: #666464;
    position: absolute;
    left: 5.2%;
    top: 40.2%;
    padding: 0;
  }

  .menu {
    display: none;
    position: absolute;
  }

  body {
    font-family: Helvetica;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: #000;
    font-family: "Poppins", sans-serif;
  }
  .site-header {
    border-bottom: 1px solid #ccc;
    padding: 0.5em 1em;
    display: flex;
    justify-content: space-between;
    font-family: "Poppins", sans-serif;
  }

  .site-identity h1 {
    font-size: 1.5em;
    margin: 0.6em 0;
    display: inline-block;
    align-items: center;
    top: 50%;
    transform: translateY(-40%);
  }
  .site-identity img {    
    top: 50%;
    transform: translateY(10%);
    margin-right: 10px;
  }

  .site-navigation ul,
  .site-navigation li {
    margin: 0;
    padding: 0;
    top: 0%;
    transform: translateY(7.5%);
  }

  .site-navigation li {
    display: inline-block;
    margin: 1.4em 1em 1em 1em;
  }

  .title {
    margin: 0.6em 0;
    display: inline-block;
    position: absolute;
    top: 30%;
    left: 5%;
    font: 3em "Poppins", sans-serif, bold;
    animation: fade 0.5s ease-in-out;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-bottom {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    .site-navigation {
      display: none;
    }
    .menu {
      display: block;
      cursor: pointer;
    }
    .paragraph {
      top: 53.2%;
    }
  }

  /* CSS */
  .btnInf {
    left: 5.2%;
    top: 55.2%;

    align-items: center;
    appearance: none;
    background-color: #fcfcfd;
    border-radius: 4px;
    border-width: 0;
    // box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    //   rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    box-sizing: border-box;
    color: #36395a;
    cursor: pointer;
    display: inline-flex;
    font-family: "Poppins", sans-serif;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: absolute;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 18px;
    font-weight: 300;
    border: 1px solid #d6d6e7;
    animation: fade-bottom 2s ease-in-out;
  }


  .btnInf:focus {
    // box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
    //   rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  .btnInf:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
    background: linear-gradient(30deg, #ffffff, #f1ebf6);
  }

  .btnInf:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(2px);
  }

  @keyframes def {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
</style>
