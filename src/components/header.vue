<template>
  <header>
    <div class="logo">
      <img src="../assets/SVG/moviereel.svg">
      <h1>{{ appName }}</h1>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      appName: 'My Movie Database'
    }
  }
}
</script>

<style scoped>
.logout {
  position: absolute;
  right: 10px;
  top: 10px;
  color: skyblue !important;
}

.logout a {
  color: skyblue;
}

html, body {
  margin: 0px !important;
}

body {
}

header {
  background-color: white;
  height: 50px;
  top: 0px;
  position: sticky;
  z-index: 6;
}

header img {
  padding-left: 20px;
  width: 70px;
}

.logo {
  position: relative;
}

header h1 {
  font-family: 'Paytone One', sans-serif;
  font-weight: lighter;
  color: #555;
  font-size: 20px;
  position: absolute;
  top: 15px;
  left: 80px;
  padding-left: 20px;
  margin: 0px;
}

@media only screen and (max-width: 400px) {
  header h1 {
    padding-top: 4px;
    font-size: 13px;
  }
}
</style>
