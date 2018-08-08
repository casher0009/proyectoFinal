import { Component, OnInit,} from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";

export interface Theme {
  value: string;
  viewValue: string;
}

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
lat: any;
lng: any;
zoom: number = 16.1;

map:any
profile:any={
  location
}
showmap=false

  constructor(private router: Router,
     private userservice: UserService,
  ) {}

  mapOn(){
    this.showmap=true
  }
  ubicacion(){
    navigator.geolocation.getCurrentPosition(this.localizacion.bind(this),this.error)
  }

  localizacion(posicion){
    this.map=true
    this.lat= posicion.coords.latitude;
    this.lng= posicion.coords.longitude;
    // this.modalform.location.coordinates[1]=this.lat
    // this.modalform.location.coordinates[0]=this.lng
    localStorage.setItem("lat",this.lat)
    localStorage.setItem("lng",this.lng)
  }
  
  
   error(e){
   console.log(e);
  
  }


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
      setTimeout(()=>{
        this.router.navigate(["actual"])

      },2000)
    })
  }


  detailOrder(id){
    localStorage.setItem("orderID", id)
    this.router.navigate(["actual"])
  }

select(){
  const elems = document.getElementById('select');
  M.FormSelect.init(elems);

}

  ngOnInit() {
    localStorage.removeItem("order")
    localStorage.removeItem("lat")
    localStorage.removeItem("lng")
    

    this.select()
    if (!localStorage.getItem("user")) {
      this.router.navigate(["signup"]);
    }
    this.getOrders() 
  }

}
