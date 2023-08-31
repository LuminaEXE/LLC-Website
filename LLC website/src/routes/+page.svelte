<!-- Routes 👇 -->


<script>


  import { EDITOR } from '$env/static/private';
 import { Router, Route, Link } from '../../node_modules/svelte-routing'
  export let url = ""
 
 
  import Education from './Education.svelte'
 </script>
 
 
 
 
 <main>
 
 
  <!-- header -->
  <header class="site-header">
    <div class="site-identity">
      <h1><a href="#">Sachman's LLC Portfolio</a></h1>
    </div>
    <nav class="site-navigation">
      <ul class="nav">
        <li><a href="./Education">Education</a></li>
        <li><a href="#">Family</a></li>
        <li><a href="#">Hobbies</a></li>
      </ul>
    </nav>
  </header>
 
 
 
 
  <Router url={url}>
    <nav class="site-navigation">
      <ul class="nav">
        <Link to="/Education">Education</Link>
      </ul>
    </nav>
 
 
    <Route path="/Education"><Education /></Route>
  </Router>
 
 
 
 
 
 
  <!-- css -->
  <style lang="scss">
    body {
      font-family: Helvetica;
      margin: 0;
    }
    a {
      text-decoration: none;
      color: #000;
    }
    .site-header {
      border-bottom: 1px solid #ccc;
      padding: 0.5em 1em;
      display: flex;
      justify-content: space-between;
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
 </main>
 
 
 