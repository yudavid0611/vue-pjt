<template>
  <div id="app">
    <nav>
      <router-link to="/movies">movies</router-link> |
      <router-link to="/random">random</router-link> |
      <router-link to="/watch-list">watch-list</router-link>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
    <!-- <MovieView/> -->
    <router-view/>
  </div>
</template>

<script>
// import MovieView from './views/MovieView.vue';
// export default{
//   components:{
//     MovieView,
//   },
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
