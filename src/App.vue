<template>
  <div id="app">
    <div class="links">
      <router-link to='/'>Home</router-link>
      <router-link to='/images'>Images</router-link>
      <router-link target="_blank" to='/images'>Images(new tab)</router-link>
      <router-link to='/music'>Music</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.links{
  padding: 0 0 1rem 0;
  a{
    padding: 0 1rem;
  } 
}

h1, h2 {
  font-weight: normal;
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
