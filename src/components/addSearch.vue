<template>
  <div>
    <p>Search for Movies to add:</p> <input type="text" name="searchBox" v-model="searchString" value="">
    <input type="button" name="search" value="Search" v-on:click="searchAPI">
    <div
      v-show="searchSuccesfull"
      id="results">
      <div
        v-for="(movies, index) in searchResults"
        class="tile">
        <span v-if="movies.poster_path != 'null'">
        <div class="innerTile">
          <div class="poster">

              <img
                :src="movies.poster_path"
                alt="">

          </div>
          <div class="resultsText">
            <h3>{{ movies.title }}</h3>
            <p>{{ movies.overview }}</p>
            <div>
              <select name="Movie Format" v-model="selectedFormat">
                  <option
                    v-for="(movieFormat, key) in movieFormatObj"
                    v-bind:value="movieFormat.format"> {{ movieFormat.format }}
                  </option>
              </select>Select Movie Format
              <input type="button" name="addButton" value="Add New Format" v-on:click="addNewFormat">
            </div>
            <input type="button" v-bind:name="index" value="Add to Library" v-on:click="addToLibrary">
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
  name: 'movie_format_app',
  data () {
    return {
      searchString: '',
      searchSuccesfull: false,
      searchResults: [],
      movieFormatObj: [],
      selectedFormat: ''
    }
  },
  methods: {
    searchAPI: function() {
      console.log("search clicked")
      var params = new URLSearchParams()
      params.append('search', this.searchString)
      axios.defaults.withCredentials = true;
      axios.post(globalStore.phpPath + '/php/searchAPI.php', params)
      .then(response => {
        console.log(response.data)
        if (typeof response.data['message'] !== 'undefined') {
          console.log(response.data['message'])
        } else {
          this.searchResults = response.data
          this.searchSuccesfull = true
        }
      })
    },
    addToLibrary: function() {
      console.log('add to library')
      var params = new URLSearchParams()
      params.append('title', this.searchResults[event.target.name]['title'])
      params.append('poster_url', this.searchResults[event.target.name]['poster_path'])
      params.append('overview', this.searchResults[event.target.name]['overview'])
      params.append('genre_ids', this.searchResults[event.target.name]['genre_ids'])
      params.append('format', this.selectedFormat)
      axios.defaults.withCredentials = true;
      axios.post(globalStore.phpPath + '/php/addToLibrary.php', params)
      .then(response => {
        console.log(response.data)
        if (typeof response.data['message'] !== 'undefined') {
          console.log(response.data['message'])
        } else {
        }
      })
    },
    addNewFormat: function() {
      console.log('add new format')
      var params = new URLSearchParams()
      params.append('movie_format', prompt("Enter a Media Format", "DVD"))
      axios.defaults.withCredentials = true;
      axios.post(globalStore.phpPath + '/php/addNewMovieFormat.php', params)
      .then(response => {
        console.log(response.data)
        this.getMovieFormat();
      })
    },
    getMovieFormat: function() {
      console.log("loading movie format")
      var params = new URLSearchParams()
      axios.defaults.withCredentials = true;
      axios.post(globalStore.phpPath + '/php/getMovieFormat.php')
      .then(response => {
        console.log(response.data)
        this.movieFormatObj = response.data;
      })
    }
  },
  beforeCreate: function() {
    console.log("loading movie format")
    var params = new URLSearchParams()
    axios.defaults.withCredentials = true;
    axios.post(globalStore.phpPath + '/php/getMovieFormat.php')
    .then(response => {
      console.log(response.data)
      this.movieFormatObj = response.data

    })
  }
}
</script>

<style scoped>
h1, a, p {
  color: white;
}

div {

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
