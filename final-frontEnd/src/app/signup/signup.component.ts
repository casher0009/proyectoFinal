import { Component, OnInit } from '@angular/core';
import{AuthService} from '../services/auth.service'
import{Router} from '@angular/router'
import {FirebaseService} from '../services/firebase.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLogged = false
  form={}
  user=null

  constructor(
    private authservice:AuthService,
    private router:Router,
    private firebaseService: FirebaseService

  ) { }

  signUp(){
this.authservice.signUp(this.form)
.subscribe(user=>{
  this.user= user
})
  
}

login(){
  this.authservice.login(this.form)
  .subscribe(user=>{
    this.user = user
    localStorage.setItem('user', JSON.stringify(user))
  })
}

loginWithFacebook(){
  this.firebaseService.loginWithFacebook()
}

loginWithGoogle(){
  this.firebaseService.loginWithGoogle()
}


  ngOnInit() {
  }

}
