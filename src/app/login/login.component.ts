import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { from } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
