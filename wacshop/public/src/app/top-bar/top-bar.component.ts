import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Observable } from 'rxjs';
// import * as firebase from 'firebase'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  user: Observable<firebase.User>;
  currentUser: firebase.User;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
    this.user.subscribe((user: firebase.User) => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
