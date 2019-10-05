import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import * as firebase from "firebase/app";
require("firebase/functions");

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
  constructor(public auth: AuthService) {}
  name: string;
  email: string;
  photoUrl: string;
  uid: string;
  emailVerified: boolean;
  userRole: string;

  ngOnInit() {}

  // https://firebase.google.com/docs/auth/web/manage-users
  showProfile() {
    const user = firebase.auth().currentUser;
    if (user != null) {
      this.name = user.displayName;
      this.email = user.email;
      this.photoUrl = user.photoURL;
      this.emailVerified = user.emailVerified;
      this.uid = user.uid;
    }
  }
  showRole() {
    firebase
      .auth()
      .currentUser.getIdTokenResult()
      .then(idTokenResult => {
        console.log(idTokenResult);
        // Confirm the user is an Admin.
        if (!!idTokenResult.claims.admin) {
          // Show admin UI.
          // showAdminUI();
          this.userRole = "Admin";
        } else {
          // Show regular user UI.
          // showRegularUI();
          this.userRole = "Regular";
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  makeAdmin() {
    const addAdminRole = firebase.functions().httpsCallable("addAdmin");
    addAdminRole({ email: this.email }).then(result => {
      this.userRole = "Admin";
      console.log("Admin role added to token" + result);
    });
  }
}
