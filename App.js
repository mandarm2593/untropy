import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase-config'

firebase.initializeApp(firebaseConfig)

export default function App() {

  
  useEffect(() => {
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      console.warn('user')

      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  },[])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
