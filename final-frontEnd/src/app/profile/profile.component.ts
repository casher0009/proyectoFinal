import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{UserService} from '../services/user.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = JSON.parse(localStorage.getItem('user'))
  // lat = this.user.addres[0].location.coordinates[1]
  // lng = this.user.addres[0].location.coordinates[0]
  // address = this.user.addres[0].location.address
  
  id:string
   
  constructor(
    private router : Router,
    private userservice: UserService
  ) { }

  ngOnInit() {
    console.log(this.user)
    if(!localStorage.getItem('user')){
      this.router.navigate(['signup'])
    }

  }
}
