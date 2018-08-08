import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { OrderserviceService } from "../services/orderservice.service";

@Component({
  selector: "app-trackorder",
  templateUrl: "./trackorder.component.html",
  styleUrls: ["./trackorder.component.css"]
})
export class TrackorderComponent implements OnInit, OnDestroy {
  lat: any = Number(localStorage.getItem("lat"));
  lng: any = Number(localStorage.getItem("lng"));
  zoom: any = 16.1;
  user: any = JSON.parse(localStorage.getItem("user"));
  order: any = JSON.parse(localStorage.getItem("order"));

  constructor(
    private orderservice: OrderserviceService,
    private router: Router
  ) {}

  toProfile() {
    localStorage.removeItem("lat");
    localStorage.removeItem("lng");
    this.router.navigate(["profile"]);
  }
  toEdit() {
    this.router.navigate(["edit"]);
  }
  toCancel() {
    console.log(this.order._id,"id pa borrar")

    this.orderservice.deleteOrder(this.order._id).subscribe(result=>console.log(result),error=>console.log(error))
    setTimeout(() => {
      this.order.active = false;
    }, 2000);
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
