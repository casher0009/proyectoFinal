import { Routes } from "@angular/router";

//componentes
import { SignupComponent } from "./signup/signup.component";
import { MainComponent } from "./main/main.component";
import { ProfileComponent } from "./profile/profile.component";
import { NeworderComponent } from "./neworder/neworder.component";
import { OrdershistoryComponent } from "./ordershistory/ordershistory.component";
import { SuportComponent } from "./suport/suport.component";
import { TrackorderComponent } from "./trackorder/trackorder.component";

export const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "new",
    component: NeworderComponent
  },
  {
    path: "orders",
    component: OrdershistoryComponent
  },
  {
    path: "help",
    component: SuportComponent
  },
  {
    path: "actual",
    component: TrackorderComponent
  }
];
