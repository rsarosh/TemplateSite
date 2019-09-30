import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { Mainband1Component } from "./mainband1/mainband1.component";
import { Mainband2Component } from "./mainband2/mainband2.component";
import { Mainband3Component } from "./mainband3/mainband3.component";
import { Mainband4Component } from "./mainband4/mainband4.component";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { config } from "rxjs";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "main", component: MainComponent },
  { path: "", redirectTo: "main", pathMatch: "full" }
];

const firebaseConfig = {
  apiKey: "Firebase Key",
  authDomain: "knosh-ec3d4.firebaseapp.com",
  databaseURL: "https://knosh-ec3d4.firebaseio.com",
  projectId: "knosh-ec3d4",
  storageBucket: "knosh-ec3d4.appspot.com",
  messagingSenderId: "450129141377",
  appId: "1:450129141377:web:060870b8e6fd0a41293780",
  measurementId: "G-YX0F42B6VC"
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    Mainband1Component,
    Mainband2Component,
    Mainband3Component,
    Mainband4Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
