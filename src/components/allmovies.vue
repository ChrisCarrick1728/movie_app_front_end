<template>
  <div>
    <nav-link></nav-link>
    <h2>All Movies</h2>
    <div class="tile" v-for="movie in allMoviesObj">
      <div class="innerTile">
        <div class="poster">
          <span v-if="movie.movie_poster_url != 'null'">
            <img
              :src="movie.movie_poster_url"
              alt="">
          </span>
        </div>
        <div class="resultsText">
          <h3>{{ movie.title }}</h3>
          <p>{{ movie.description }}</p>
          <span v-if="movie.date_last_watched != ''"><p>Last Watched: {{ movie.date_last_watched }}</p></span>
          <span v-if="movie.times_watched != 'null'"><p>Time Watched: {{ movie.times_watched }}</p></span>
          <p>Media Format: {{ movie.format }}</p>
          <p>Genre:<span v-for="genre in movie.genre">&nbsp;&nbsp;&nbsp;{{ genre }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {globalStore} from '../main.js'
import axios from 'axios'
import NavLinks from '../components/links.vue';
export default {
  components: {
    'nav-link': NavLinks
  },
  name: 'allmovies',
  data () {
    return {
      allMoviesObj: {}
    }
  },
  methods: {
  },
  mounted() {
    axios.defaults.withCredentials = true;
    axios.get(globalStore.phpPath + '/php/showAllMovies.php')
    .then(response => {
      console.log(response.data)
      this.allMoviesObj = response.data
    })
  }
}
</script>

<style scoped>
h1, h2, h3, a, p {
  color: white;
}

ul {
  color: white;
}

@import url('https://fonts.googleapis.com/css?family=Paytone+One');

#search {
  padding-top: 40px;
  width: 100%;
}
.searchContainer {
  width: 100%;
}
.searchCenter {
  width:460px;
  margin-left: auto;
  margin-right: auto;
}

span {
  color: white;
}

input {
  background-color: #333;
  border: none;
  height: 50px;
  border: 1px solid #444;
  margin: 0px;
  font-size: 20px;
  outline: none;
  caret-color: #444;
  letter-spacing: 2px;
}

input.searchBox {
  width: 300px;
  text-indent: 20px;
  border-radius: 20px 0px 0px 20px;
  background-color: #333;
  padding: 0px;
  color: #888;
  font-weight: lighter;
}

input.searchButton {
  width: 100px;
  border-radius: 0px 20px 20px 0px;
  text-align: center;
  background-color: LightBlue;
  color: #333;
  cursor: pointer;
  height: 53px;
  border: none
}

input.searchBox:focus {
  background-color: #555;
  color: white;
}

input.searchButton:hover {
  cursor: pointer;
  background-color: lightYellow;
}

input:-webkit-autofill {
    -webkit-text-fill-color: #444 !important;
}

#results {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}
.tile {
  width: 310px;
  max-width: 100%;
  margin: 20px;
  /* background-color: #444; */
  margin-left: auto;
  margin-right: auto;
  /* text-overflow: ellipsis; */
  /* box-shadow: 3px 3px 5px Black; */
}

.innerTile {
  width: 300px;
  max-width: 100%;
  margin: 20px;
  height: 100%;
  background-color: #555;
  margin-left: auto;
  margin-right: auto;
  text-overflow: ellipsis;
  box-shadow: 3px 3px 5px Black;
}

.poster {
  padding: 10px;
  display: inline;
  float: left;

}
.poster img {
  max-width: 100%;
  width: 280px;
  object-fit: cover;
}

.resultsText {
  display: inline;
  float: left;
  text-overflow: ellipsis;
  padding-left: 20px;
  padding-right: 20px;
}

.resultsText h3 {
  padding-top: 10px;
  margin: 0px;
  text-align: center;
  font-family: sans-serif;
  font-size: 30px;
  color: LightBlue;
  letter-spacing: 2px;
}

.resultsText p {
  text-align: center;
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 15px;
  color: LightBlue;
}

@media only screen and (max-width: 460px) {
  .searchCenter {
    width: auto;
  }
  input.searchBox {
    width:100%;
    padding: 0px;
    border-radius: 0px;
    border-left: none;
    border-right: none;
  }

  input.searchButton {
    width: 100%;
    border-radius: 0px;
  }

  header h1{
    max-width: 200px;
    font-size: 6vw;
  }
}
</style>
