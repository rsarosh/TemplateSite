import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireModule } from "angularfire2";
import { AngularFireStorage } from "@angular/fire/storage";
import * as firebase from "firebase/app";

@Component({
  selector: "app-image-upload",
  templateUrl: "./image-upload.component.html",
  styleUrls: ["./image-upload.component.less"]
})
export class ImageUploadComponent implements OnInit {
  db: AngularFirestore;
  storage: AngularFirestore;
  selectedFile: any;

  constructor(db: AngularFirestore) {
    this.db = db;
  }

  ngOnInit() {}

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }
  writeToDB(url) {
    this.db
      .collection("items")
      .doc("ImageDetails")
      .set({
        username: "Rafat Sarosh",
        url
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch(error => {
        console.log(error);
        alert("Error writing document: " + error);
      });
  }

  onUpload() {
    const storageRef = firebase
      .storage()
      .ref("/images/" + this.selectedFile.name);

    const uploadTask = storageRef.put(this.selectedFile);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      snapshot => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        // tslint:disable-next-line: prefer-const
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      error => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log("File available at", downloadURL);
          this.writeToDB(downloadURL);
        });
      }
    );
  }
}
