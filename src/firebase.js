import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBaS1W-_VoeZEqAjoqjaSqck_IFuzEeWE4",
    authDomain: "fun-food-app-react.firebaseapp.com",
    databaseURL: "https://fun-food-app-react.firebaseio.com",
    projectId: "fun-food-app-react",
    storageBucket: "",
    messagingSenderId: "796730236561",
    appId: "1:796730236561:web:c43f2884657e9cdce6a930",
    measurementId: "G-3MQXPBJ045"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase