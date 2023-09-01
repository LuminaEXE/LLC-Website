

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




<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Poppins");

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
</style>
