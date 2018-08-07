import {
  Component,
  ViewChild,
  ViewChildren,
  OnInit,
  AfterViewInit,
  ElementRef,
  QueryList
} from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { FirebaseService } from "../services/firebase.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit, AfterViewInit {
  @ViewChild("sidenav") sidenav: ElementRef;
  isLogged = true;
  form2:any = {};

  form: any = {};
  user = null;

  constructor(
    private authservice: AuthService,
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  signUp() {
    this.authservice.signUp(this.form2).subscribe(user => {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["profile"]);
    });
  }

  login() {
    this.authservice.login(this.form).subscribe(user => {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["profile"]);
    });
  }

  loginWithFacebook() {
    setTimeout(() => {
      this.router.navigate(["profile"]);
    }, 3000,);
    this.firebaseService.loginWithFacebook();
  }

  // loginWithGoogle(){
  //   this.firebaseService.loginWithGoogle()
  // }

  ngOnInit() {
    if (localStorage.getItem("user")) {
      this.router.navigate(["profile"]);
    }
  }
  ngAfterViewInit() {
    if (localStorage.getItem("user")) {
      this.router.navigate(["profile"]);
    }

  }
}
