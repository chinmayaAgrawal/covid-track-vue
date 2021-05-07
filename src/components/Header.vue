<template>
  <header class="text-center bg-blue-800 text-white p-4 mb-10">
    <div id="nav">
         <router-link to="/">Home</router-link> |
         <router-link to="/about">About</router-link>
    </div>
    <div class="text-4xl md:text-5xl font-bold mb-3">
      <i class="fa fa-viruses"></i> Covid-19 Tracker
    </div>

    <p>
      API by
      <a class="text-blue-300" href="https://covid19api.com" target="_blank">covid19api.com</a>
    </p>
    
  </header>
  
</template>

<script>
export default {
  name: 'Header'
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
