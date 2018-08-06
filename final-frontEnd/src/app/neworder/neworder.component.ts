import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NeworderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(!localStorage.getItem('user')){
      this.router.navigate(['signup'])
    }

  }

}
