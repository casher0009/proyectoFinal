import {
  Component,
  ViewChild,
  ViewChildren,
  OnInit,
  AfterViewInit,
  ElementRef,
  QueryList
} from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild("sidenav") sidenav: ElementRef;

  user: any = {};

  constructor(private authservice:AuthService,
     private router: Router) {}

  home() {
    this.router.navigate([""]);
  }

  help() {
    this.router.navigate(["help"]);
  }

  logout() {
    this.authservice.logout()
    localStorage.removeItem("user");
    localStorage.removeItem("facebookToken");
    localStorage.clear();
  }

  ngOnInit() {
    if (!localStorage.getItem("user")) {
      this.user = null;
    } else {
      this.user = localStorage.getItem("user");
    }
  }
  // Initialize Materialize JS
  ngAfterViewInit() {
    // Sidena
    M.Sidenav.init(this.sidenav.nativeElement);
  }
}
