<template>
  <div id="overlay">
    <h1>overlay</h1>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style scoped>
h1, a {
  color: white;
}

div #overlay {
  background-color: rgba(30, 30, 30, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top:80px;
  left: 0px;
}

h1 {
  text-align: center;
}

</style>
