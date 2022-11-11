<template>
  <div 
    @click="watch(movie.title)"
    :class="{ 'is-watched': movie.isWatched }">
    {{ movie.title }}
  </div>
</template>

<script>
export default {
  name: 'WatchListItem',
  props: {
    movie: Object,
  },
  methods: {
    watch(title) {
      this.$emit('watch', title)
    }
  }
}
</script>

<style>
.is-watched {
  text-decoration: line-through;
  background-color:rgba(7, 7, 7, 0.452);
}
</style>