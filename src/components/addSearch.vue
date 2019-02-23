<template>
  <div>
    <h1>Search for movies to add to your database:</h1>
    <div class="searchBoxContainer">

      <input type="text" name="searchBox" v-model="searchString" value="" id="searchBoxId">
      <input type="button" name="search" value="Search" v-on:click="searchAPI" id="searchButtonId">
    </div>
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
            <input type="button" v-bind:name="index" value="Add to Library" v-on:click="addToOverlay" id="openOverlayButton">
            <h3>{{ movies.title }}</h3>
            <p>{{ movies.overview }}</p>
            <div>
            </div>
          </div>
        </div>
        </span>
      </div>
    </div>
    <div v-show="showOverlay" id="overlay">
      <div class="closeOverlayButton">

      </div>
      <div class="addMovies" v-if="overlayIndex != ''">
        <h2>You are about to add</br> <span>{{ searchResults[overlayIndex]['title'] }}</span></br>to your personal library</h2>
        <p>Select Movie Format</p>
        <select name="Movie Format" v-model="selectedFormat" id="formatDropDown">
            <option
              v-for="(movieFormat, key) in movieFormatObj"
              v-bind:value="movieFormat.format"> {{ movieFormat.format }}
            </option>
        </select>
        <input type="button" name="addButton" value="Add New Format" v-on:click="addNewFormat" id="formatAddButton">
        <input type="button" v-bind:name="overlayIndex" value="Add to Library" v-on:click="addToLibrary" id="addToLibraryButton">
        <input type="button" name="closeOverlay" value="Cancel" v-on:click="showOverlay = !showOverlay" id="closeOverlayId">
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
      selectedFormat: '',
      showOverlay: false,
      overlayIndex: ''
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
          this.showOverlay = !this.showOverlay;
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
    },
    addToOverlay: function() {
      this.overlayIndex = event.target.name;
      this.showOverlay = !this.showOverlay;
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
@import url('https://fonts.googleapis.com/css?family=Roboto:100');
h1, a, p {
  color: white;
}

h1 {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  letter-spacing: 3px;
}

div #overlay {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: fixed;
  top:50px;
  left: 0px;
  color: white;
}


#overlay .addMovies {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  background-color: #333;
  padding: 20px 20px;
  margin-top: 20px;
  box-shadow: 3px 3px 5px Black;
}

#overlay p {
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

.addMovies #formatDropDown {
  background-color: #333;
  height: 30px;
  outline: none;
  color: white;
  width: 49%;
  border: 1px solid #555;
  cursor: pointer;
}

.addMovies #formatDropDown:hover {
  background-color: #222;
  box-shadow: 3px 3px 5px Black;
}

.addMovies #formatAddButton {
  background-color: #333;
  height:30px;
  outline: none;
  color: white;
  border-radius: 6px;
  width: 49%;
  border: 1px solid #555;
  cursor: pointer;
}

.addMovies #formatAddButton:hover {
  background-color: #222;
  box-shadow: 3px 3px 5px Black;
}

.addMovies #addToLibraryButton {
  margin-top: 5px;
  background-color: #333;
  height:30px;
  outline: none;
  color: white;
  border-radius: 6px;
  width: 100%;
  border: 1px solid #555;
  cursor: pointer;
}

.addMovies #addToLibraryButton:hover {
  background-color: OliveDrab;
  box-shadow: 3px 3px 5px Black;
}

.addMovies #closeOverlayId {
  margin-top: 5px;
  background-color: #333;
  height:30px;
  outline: none;
  color: white;
  border-radius: 6px;
  width: 100%;
  border: 1px solid #555;
  cursor: pointer;
}

.addMovies #closeOverlayId:hover {
  background-color: IndianRed;
  box-shadow: 3px 3px 5px Black;
}

#openOverlayButton {
  position: relative;
  margin-top: 5px;
  background-color: #333;
  height:30px;
  outline: none;
  color: white;
  border-radius: 6px;
  width: 100%;
  border: 1px solid #555;
  cursor: pointer;

}

#openOverlayButton:hover {
  background-color: OliveDrab;
  box-shadow: 3px 3px 5px Black;
}

.addMovies h2 {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
}

.addMovies h2 span {
  color: LightBlue;
  font-size: 28px;
  letter-spacing: 0px;
}

.searchBoxContainer {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}

.searchBoxContainer #searchBoxId {
  width: 200px;
  height: 50px;
  padding: 0px;
  background-color: rgba(30, 30, 30, 0.5);
  border: none;
  border: 1px solid #777;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  color: white;
  text-indent: 20px;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: lighter;
  outline: none;
}

.searchBoxContainer #searchBoxId:focus {
  background-color: white;
  color: black;
}

.searchBoxContainer #searchButtonId {
  width: 90px;
  height: 52px;
  padding: 0px;
  background-color: rgba(30, 30, 30, 0.5);
  border: none;
  border: 1px solid #777;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  color: white;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: lighter;
  cursor: pointer;
  outline: none;
}

.searchBoxContainer #searchButtonId:focus {
  background-color: white;
  color: black;
}

.searchBoxContainer #searchButtonId:hover {
  background-color: white;
  color: black;
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
  margin-left: auto;
  margin-right: auto;
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
