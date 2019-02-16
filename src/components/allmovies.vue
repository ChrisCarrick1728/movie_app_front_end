<template>
  <div>

    <h2>All Movies</h2>
    <div id="results">
      <div
        v-for="(movies, index) in allMoviesObj"
        class="tile">
        <span v-if="movies.poster_path != 'null'">
        <div class="innerTile">
          <div class="poster">
              <img
                :src="movies.movie_poster_url"
                alt="">
          </div>
          <div class="resultsText">
            <h3>{{ movies.title }}</h3>
            <p>{{ movies.description }}</p>
            <span v-if="movies.date_last_watched != ''"><p>Last Watched: {{ movies.date_last_watched }}</p></span>
            <span v-if="movies.times_watched != 'null'"><p>Times Watched: {{ movies.times_watched }}</p></span>
            <p>Media Format: {{ movies.format }}</p>
            <p class="genre">Genre:</p><li v-for="genre in movies.genre">{{ genre }}</li>
            <input type="button" v-bind:name="movies.title" value="Watch This Movie" v-on:click="watchMovie">
            <input type="button" v-bind:name="movies.title" value="Delete From Library" v-on:click="deleteMovie">
          </div>
        </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {globalStore} from '../main.js'
import axios from 'axios'
export default {
  name: 'allmovies',
  data () {
    return {
      allMoviesObj: {}
    }
  },
  methods: {
    deleteMovie: function() {
      if (confirm("Are you sure you want to delete?")) {
        console.log('delete movie')
        var params = new URLSearchParams()
        params.append('title', event.target.name)
        axios.defaults.withCredentials = true;
        axios.post(globalStore.phpPath + '/php/deleteMovie.php', params)
        .then(response => {
          console.log(response.data)
          this.refreshMoviesList();
        })
      }
    },
    watchMovie: function() {
      console.log('watch movie')
      var params = new URLSearchParams()
      params.append('title', event.target.name)
      axios.defaults.withCredentials = true;
      axios.post(globalStore.phpPath + '/php/watchMovie.php', params)
      .then(response => {
        console.log(response.data)
        this.refreshMoviesList();
      })
    },
    refreshMoviesList: function() {
      axios.defaults.withCredentials = true;
      axios.get(globalStore.phpPath + '/php/showAllMovies.php')
      .then(response => {
        //console.log(response.data)
        this.allMoviesObj = response.data
      })
    }
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

input[type="button"] {
  width: 100%;
  text-align: center;
  background-color: LightBlue;
  color: #333;
  cursor: pointer;
  height: 53px;
  border: none;
  position: relative;
  bottom: 20px;
}

input[type="button"]:hover {
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
  text-align: left;
  font-family: sans-serif;
  font-weight: lighter;
  font-size: 15px;
  color: LightBlue;
}

.resultsText li {
  color: #aaa;
  list-style-type: none;
  font-family: sans-serif;
  font-weight: lighter;
  text-indent: 10px;
  font-size: 12px;
  padding: 3px;
  margin: 3px;
}

.genre {

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
