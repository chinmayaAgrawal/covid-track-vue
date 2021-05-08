<template>
  <footer class="copy-right text-center bg-black text-white p-4 mt-10" >
    <div class="text-1xl md:text-1.5xl font-bold mt-3">
          Copyright &copy; 2021
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- bottom:0 because it will fix whole thing at one point not respo -->

<style scoped>
.copy-right{
    position:absolute;
    text-align: center;
    padding: 1rem;
    background: darken(rgb(54, 44, 44), 10);
    color: rgba(255, 246, 246, 0.87);
    height: 60px;
    width:100%;
}
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
