<script>
  import { onMount } from "svelte";

  onMount(() => {
    let el = document.querySelector(".img1");
    //@ts-ignore
    el.addEventListener("animationend", () => {
      //@ts-ignore
      el.style.filter = "brightness(70%)";
    });

    el?.addEventListener("click", () => {
      //make a drop down with text
      
    });
  })
</script>

<div id="Header">
  <header class="site-header">
    <div class="site-identity">
      <h1><a href="/">Sachman's LLC Portfolio</a></h1>
    </div>
    <nav class="site-navigation">
      <ul class="nav">
        <li><a href="/Education">Education</a></li>
        <li><a href="/Family">Family</a></li>
        <li><a href="/Hobbies">Hobbies</a></li>
      </ul>
    </nav>
  </header>
</div>

<h1 class="title gradient">Photography</h1>

<img
  src="https://i.imgur.com/WRCHnqx.jpg"
  width="800px"
  height="600px"
  class="img1"
/>
<div class="felix-daddys-ballsack" />

<h1 class="title gradient">Photography</h1>

<img
  src="https://i.imgur.com/WRCHnqx.jpg"
  width="800px"
  height="600px"
  class=""
/>
<div class="" />

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Poppins");

  .felix-daddys-ballsack {
    background-image: linear-gradient(
      90deg,
      rgb(12, 52, 255),
      rgb(255, 0, 170)
    );
    filter: blur(25px);
    opacity: 0.5;
    width: 810px;
    height: 610px;
    padding: 0;
    margin: 0;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 25%;
    z-index: 0;
  }

  .title {
    filter: drop-shadow(1px 1px 2rem rgb(255, 255, 255));
    margin: 0.6em 0;
    display: inline-block;
    position: absolute;
    font: 3em "Poppins", sans-serif, bold;
    animation: fade 2s ease-in-out;
    /* make centered */
    left: 50%;
    transform: translateX(-50%);
    top: 10%;
    font-weight: 900;
  }
  .gradient {
    background: linear-gradient(40deg, #62ddf8, #ff7ad0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: bold;
  }
  .img1 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 25.5%;
    z-index: 1;
  }
  .img1:hover {
    animation: tint-black 0.5s ease-in-out;
  }

  #Header {
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    margin-bottom: 1em;
    top: 0;
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
  }

  .site-navigation ul,
  .site-navigation li {
    margin: 0;
    padding: 0;
  }

  .site-navigation li {
    display: inline-block;
    margin: 1.4em 1em 1em 1em;
  }
  @keyframes tint-black {
    0% {
      filter: brightness(100%);
    }
    100% {
      filter: brightness(70%);
    }
  }
  @keyframes tint-black-inv {
    0% {
      filter: brightness(70%);
    }
    100% {
      filter: brightness(100%);
    }
  }
</style>
