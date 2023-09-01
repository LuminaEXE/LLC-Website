<script>
  import { onMount } from "svelte";

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
      var txt = "I'm a 14 Year old Sophomore at New Tech High School.";
      var speed = 60;

      function typeWriter() {
        if (i < txt.length) {
          let title = document.querySelector(".paragraph");

          if (i == 30) {
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
    }, 1000);
  });
</script>

<!-- Title -->
<div>
  <!-- svelte-ignore a11y-missing-content -->
  <h1 class="title" >Hey, I'm <span class="gradient">Sachman</span>.</h1>
  <p class="paragraph" />
</div>

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
    <!-- create hamburger menu -->
    <div class="menu">
      <div class="line1" />
      <div class="line2" />
      <div class="line3" />
    </div>
  </header>
</div>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Poppins");

  #Header {
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    margin-bottom: 1em;
    top: 0;
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
    top: 42.2%;
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

  .title {
    margin: 0.6em 0;
    display: inline-block;
    position: absolute;
    top: 30%;
    left: 5%;
    font: 3em "Poppins", sans-serif, bold;
    animation: fade 2s ease-in-out;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
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
  }
</style>
