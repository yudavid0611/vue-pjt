<template>
  <div>
    <h1>보고 싶은 영화</h1>
    <WatchListForm
      @add-movie="addMovie"/>
    <WatchListItem
      v-for="(movie) in movies"
      :key=movie.title
      :movie="movie"
      @watch="watch"
    />
  </div>
</template>

<script>
import WatchListForm from '@/components/WatchListForm'
import WatchListItem from '@/components/WatchListItem'

export default {
  name: 'WatchListView',
  data() {
    return {
      movies: [],
    }
  },
  components: {
    WatchListForm,
    WatchListItem,
  },
  methods: {
    addMovie(movie) {
      const movieObj = {
        title: movie,
        isWatched: false,
      }
      this.movies.push(movieObj)
    },
    watch(title) {
      this.movies.forEach((movie) => {
        if (movie.title === title) {
          movie.isWatched = !movie.isWatched
        }
      })
    }
  }
}
</script>

<style>

</style>