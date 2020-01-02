/* import { Injectable, NestMiddleware } from '@nestjs/common';
import * as firebase from "firebase/app";
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBpWMEeSXHvZVxfmKB02pyqQYW1r1qmNgo",
  authDomain: "wacshop-5192a.firebaseapp.com",
  databaseURL: "https://wacshop-5192a.firebaseio.com",
  projectId: "wacshop-5192a",
  storageBucket: "wacshop-5192a.appspot.com",
  messagingSenderId: "467095337812",
  appId: "1:467095337812:web:4338fd3c9d5a45efec66c1",
  measurementId: "G-PVFL2NEXHE"

}

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }

  constructor() {
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }

  signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup
  }
}
 */