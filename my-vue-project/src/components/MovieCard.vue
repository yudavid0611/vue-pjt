<template>
  <div class="col-4 card h-25">
    <div class="h-25">
      <img :src="`https://image.tmdb.org/t/p/original/${result.poster_path}`" class="card-img-top" height="500">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{result.original_title}}</h5>
      <p class="card-text">{{result.overview}}</p>
    </div>
  </div>
</template>
<script></script>
<script>


export default {
  name: 'MovieCard',
  props:{
    result:Object
  },
  data:function(){
    return{results:null}
  },
  
}
</script>

<style>

</style>