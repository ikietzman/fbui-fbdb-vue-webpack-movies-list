import firebase from 'firebase'
/* Replace your config info below*/
const config = {
   apiKey: /* */,
   authDomain: /* */,
   databaseURL: /* */,
   projectId: /* */,
   storageBucket: /* */,
   messagingSenderId: /* */
};

let app = firebase.initializeApp(config);
let db = app.database();

export default {
  config,
  db
};
