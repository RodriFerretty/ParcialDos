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
        result.user.updateProfile({displayName: displayName}).then(() => this.router.navigate(['login']) )
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}
