<template>
  <div>
    <div>
      <input 
        type="text" 
        v-model.trim="inputData"
        @keyup.enter="addMovie"
        >
      <button @click="addMovie">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatchListForm',
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    addMovie() {
      this.$emit('add-movie', this.inputData)
      this.inputData = null
    }
  }
}
</script>

<style>

</style>