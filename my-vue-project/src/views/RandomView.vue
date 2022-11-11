<template>
  <div class="d-flex justify-content-center">
    <div class="col-6 card">
      <img :src="`https://image.tmdb.org/t/p/original/${randomMovie?.poster_path}`" class="card-img-top" :alt="`${randomMovie?.original_title}_image`">
      <div class="card-body">
        <h5 class="card-title">{{randomMovie?.original_title}}</h5>
        <p class="card-text">{{randomMovie?.overview}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import _ from 'lodash'
import axios from 'axios'
export default {
  name: 'RandomView',
  data:function(){
    return{
      results:null,
      randomMovie:null,
      movieGenres: {
        'dark': ['80', '27', '9648', '53','10752', '37'],
        'moderate': ['99', '18', '10751', '36', '10749', '10770'],
        'bright': ['16', '35', '14', '28', '12', '10402', '878'],
      },
    }
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
        this.results=results
        const randIdx=_.random(this.results.length-1)
        this.randomMovie=this.results[randIdx]

      })
      .catch((error)=>{

        console.log(error)
      })

      // 날씨 데이터 요청
      const weatherJsonURL = 'https://api.openweathermap.org/data/2.5/weather'
      axios({
        method: 'get',
        url: weatherJsonURL,
        params: {
          lat: '37',
          lon: '126',
          appid: 'b10dac5663ebe86fb4b6acf961c25b06'
        }
      })
        .then((response) => {
          const weatherId = response.data.weather['0'].id
          let targetGenres = null
          if ((200 <= weatherId && weatherId < 600) || (700 <= weatherId && weatherId < 800))  {
            targetGenres = this.movieGenres.dark
          } else if ((600 <= weatherId && weatherId < 700) || 800 < weatherId) {
            targetGenres = this.movieGenres.moderate
          } else {
            targetGenres = this.movieGenres.bright
          }
          const targetMovies = this.results.filter(function(movie) {
            return targetGenres.includes(String(movie.genre_ids[0]))
          })
          const randIdx=_.random(targetMovies.length-1)
          this.randomMovie=targetMovies[randIdx]
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