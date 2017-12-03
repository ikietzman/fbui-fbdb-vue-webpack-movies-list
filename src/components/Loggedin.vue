<template>
  <div>
    <router-link to="/movies">Go to Movies List</router-link>
    <h1>Logged in!</h1>
    <button @click='logOut'>Log out</button><br />
    <input type="text" id="newName" v-model="name"><button @click="update">Update Display Name</button>
    <p>{{name}}</p>
    <p>{{email}}</p>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data() {
      return {
        name: 'hello',
        email: ''
      }
    },
    methods: {
      logOut() {
        firebase.auth().signOut();
        window.location.href = '/';
      },
      update() {
        /* do update function stuff here*/
        console.log('changed!');

          var user = firebase.auth().currentUser;

          user.updateProfile({
            displayName: document.getElementById('newName').value
          }).then(function() {
            console.log(user);
            //location.reload();
          }).catch(function(error) {
            // An error happened.
          });

      }
    },
    created() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.name = firebase.auth().currentUser.displayName;
          this.email = firebase.auth().currentUser.email;
        } else {
          // No user is signed in.
        }
      });
    }


  }
</script>
