import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  order: any = JSON.parse(localStorage.getItem("order"))
  modalform:any={}

  constructor(private router:Router) { }

  edited(){
    this.order.chairs = this.modalform.chairs
    this.order.tables = this.modalform.tables
    this.order.celebrated = this.modalform.celebrated
    this.order.theme = this.modalform.theme
    console.log(JSON.stringify(this.order))
      localStorage.setItem("order",JSON.stringify(this.order))

setTimeout(()=>{
  this.router.navigate(["actual"])

},1000)
}
  toActual(){
  this.router.navigate(["actual"])
  }
  
  ngOnInit() {
  }

}
