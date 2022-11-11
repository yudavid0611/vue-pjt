<template>
  <div>
    <h1>MovieView</h1><hr>
    <div class="container">
      <div class='row'>
        <MovieCard
        v-for= "(result,index) in results" 
        :key="index"
        :result="result"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
import axios from 'axios'
export default {
  name:'MovieView',
  components:{
    MovieCard,
  },
  data:function(){
    return{results:null}
  },
  methods:{
    getMovieJson(){
      
      const movieJsonURL=`https://api.themoviedb.org/3/movie/top_rated`
      axios({
        method:'get',
        url:movieJsonURL,
        params:{
          api_key:"109dfc46cea7819d47546b59f624d6f7",
          language:'ko-KR'

        }
      })
      .then((response)=>{
        const results=response.data.results
        console.log(results)
        this.results=results
        console.log(this.results)
      })
      .catch((error)=>{

        console.log(error)

      })
    }
  },
  created(){
    this.getMovieJson()
  },
}
</script>

<style>

</style>