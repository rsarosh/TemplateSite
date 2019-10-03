import { Component, OnInit } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "app-user-registration",
  templateUrl: "./user-registration.component.html",
  styleUrls: ["./user-registration.component.less"]
})
export class UserRegistrationComponent implements OnInit {
  email: string;
  firstName: string;
  public items: Observable<any[]>;
  db: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.db = db;
    this.items = db.collection("/items").valueChanges();
  }

  ngOnInit() {}

  //https://firebase.google.com/docs/firestore/manage-data/add-data
  public save() {
    alert(this.firstName);
    this.db
      .collection("items")
      .doc("LA")
      .set({
        username: this.firstName,
        email: this.email
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch(error => {
        console.log(error);
        alert("Error writing document: " + error);
      });
    // const  userId = "ABC";
    // firebase.database().ref("usersdetails/" + userId).set({
    //   username: this.firstName,
    //   email: this.email
    // });
  }
}
