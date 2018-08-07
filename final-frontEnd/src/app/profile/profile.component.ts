import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  user = JSON.parse(localStorage.getItem("user"));
  // lat = this.user.addres[0].location.coordinates[1]
  // lng = this.user.addres[0].location.coordinates[0]
  // address = this.user.addres[0].location.address
modal=false
  modalform:any={}
  id: string;
order:any


  constructor(private router: Router,
     private userservice: UserService,
  ) {}

  getOrders() {
    this.userservice.getOneUser(this.user._id).subscribe(user => {
      this.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    });
  }

  onModal(){
    this.modal = true
  }

  offModal(){
    // this.newOrder()
    setTimeout(()=>{
      this.modal = false

    },500)
  }
  
  
  newOrder(){
    this.userservice.createOrder(this.modalform).subscribe(order=>{
      this.order = order;
      localStorage.setItem('order',JSON.stringify(order))
      this.router.navigate(["profile"])

    })
  }

  ngOnInit() {
    console.log(this.user);
    if (!localStorage.getItem("user")) {
      this.router.navigate(["signup"]);
    }
    this.getOrders() 
    console.log(this.user._id);
  }
}
