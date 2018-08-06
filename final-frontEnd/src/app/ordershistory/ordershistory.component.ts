import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-ordershistory',
  templateUrl: './ordershistory.component.html',
  styleUrls: ['./ordershistory.component.css']
})
export class OrdershistoryComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    if(!localStorage.getItem('user')){
      this.router.navigate(['signup'])
    }

  }

}
