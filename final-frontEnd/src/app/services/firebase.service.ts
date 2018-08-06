import { Injectable } from "@angular/core";
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCP3djH3DYpKymdjFc7YOktLwmw_H__f7s",
  authDomain: "proyectofinal-partygo.firebaseapp.com",
  databaseURL: "https://proyectofinal-partygo.firebaseio.com",
  projectId: "proyectofinal-partygo",
  storageBucket: "proyectofinal-partygo.appspot.com",
  messagingSenderId: "378259900297"
};
firebase.initializeApp(config);

@Injectable({
  providedIn: "root"
})
export class FirebaseService {
  url = "http://localhost:3000/";
  constructor() {}
  provider = new firebase.auth.FacebookAuthProvider();
  googleProvider = new firebase.auth.GoogleAuthProvider();

  loginWithFacebook() {
    firebase
      .auth()
      .signInWithPopup(this.provider)
      .then(snap => {
        //console.log(snap.credential.accessToken)
        // localStorage.setItem('user', JSON.stringify(snap.user))
        this._sendTokenToBackend(snap);
      });
  }

  loginWithGoogle() {
    firebase
      .auth()
      .signInWithPopup(this.googleProvider)
      .then(snap => {
        console.log(snap.user);
      });
  }

  _sendTokenToBackend(snap) {
    const token = snap.credential.accessToken;
    fetch(this.url + "facebook/login", {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(r => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res));
        localStorage.setItem("facebookToken", JSON.stringify(token));
      });
  }
}
