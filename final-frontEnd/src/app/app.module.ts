import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

//servicios
import { AuthService } from "./services/auth.service";
import { FirebaseService } from "./services/firebase.service";
import { UserService } from "./services/user.service";
import { OrderserviceService } from "./services/orderservice.service";
import { routes } from "./routes";

//componentes
import { SignupComponent } from "./signup/signup.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MainComponent } from "./main/main.component";
import { NeworderComponent } from "./neworder/neworder.component";
import { HistorycardsComponent } from "./ordershistory/historycards/historycards.component";
import { OrdershistoryComponent } from "./ordershistory/ordershistory.component";
import { CardsComponent } from "./main/cards/cards.component";
import { FooterComponent } from "./main/footer/footer.component";
import { SlidesComponent } from "./main/slides/slides.component";
import { ProfileComponent } from "./profile/profile.component";
import { SuportComponent } from "./suport/suport.component";
import { TrackorderComponent } from "./trackorder/trackorder.component";
import { MapsComponent } from './trackorder/maps/maps.component';

@NgModule({
  declarations: [
    MainComponent,
    SlidesComponent,
    SuportComponent,
    TrackorderComponent,
    CardsComponent,
    FooterComponent,
    ProfileComponent,
    HistorycardsComponent,
    OrdershistoryComponent,
    AppComponent,
    NeworderComponent,
    SignupComponent,
    NavbarComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [OrderserviceService, AuthService, FirebaseService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
