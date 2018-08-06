import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router,

  ) { }

  home(){
    this.router.navigate([''])
  }

  logout(){
    localStorage.removeItem('user')
<<<<<<< HEAD
    localStorage.removeItem('facebookToken')
=======
>>>>>>> e592550f6696f99191174900e1e3d6e4fa68d685
  }

  ngOnInit() {
  }

}
