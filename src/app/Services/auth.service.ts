import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public router: Router, private afs: AngularFirestore) {

  }

  SignUp(email, password, displayName) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: displayName })
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SignIn(email, password): Promise<void> {
    return this.afAuth
      .signInWithEmailAndPassword(email, password).then((result) => {

      });
  }

  LogOut() {
    console.log("En el Logout")
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['login']);
    });
  }



}
