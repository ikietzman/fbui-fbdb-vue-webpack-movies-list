<template>
  <div class="app">
    <router-link to="/loggedin">Go to Profile Page</router-link>
    <h2 class="title">Movies List</h2>
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Genre</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="movie in movies">
          <td>{{movie.title}}</td>
          <td>{{movie.year}}</td>
          <td>{{movie.genre}}</td>
          <td><a class="delete" @click="deleteMovie(movie)"></a></td>
        </tr>
      </tbody>
    </table>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Add New Movie
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" id="title" v-model="movieObj.title">
            </div>
          </div>
          <div class="field">
            <label class="label">Year</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" id="year" v-model="movieObj.year">
            </div>
          </div>
          <div class="field">
            <label class="label">Genre</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" id="genre" v-model="movieObj.genre">
            </div>
          </div>
          <div class="control">
            <button class="button is-primary" @click="addMovie">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import toastr from 'toastr'
import 'bulma/css/bulma.css'
import 'toastr/build/toastr.css'
import config from '../utils/firebaseConfig'

let moviesRef = config.db.ref();

  export default {
    name: 'movies',
    firebase: {
      movies: moviesRef
    },
    data () {
      return {
        name: 'my name',
        movieObj: {
          title: "",
          year: "",
          genre: ""
        }
      }
    },
    methods: {
      addMovie: function() {
        moviesRef.push(this.movieObj);
        this.movieObj.title="";
        this.movieObj.year="";
        this.movieObj.genre="";
        toastr.success("Movie added!");
      },
      deleteMovie: function(movie) {
        console.log(movie.title);
        moviesRef.child(movie['.key']).remove();
        toastr.warning('Movie removed');
      }
    },
    mounted() {
      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            //console.log(test.test);
            //this.movieMsg = test.test
            //this.movieMsg = db;
            //console.log(moviesList.child('1'));
          }
      })
    }
  }
</script>
