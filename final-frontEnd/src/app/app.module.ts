import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatSelectModule, MatNativeDateModule,MatSliderModule, MatInputModule,MatDatepickerModule} from "@angular/material";
import { AppComponent } from "./app.component";
import { AgmCoreModule } from '@agm/core';

// import {} from '@types/googlemaps';
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
import { HistorycardsComponent } from "./ordershistory/historycards/historycards.component";
import { OrdershistoryComponent } from "./ordershistory/ordershistory.component";
import { CardsComponent } from "./main/cards/cards.component";
import { FooterComponent } from "./main/footer/footer.component";
import { SlidesComponent } from "./main/slides/slides.component";
import { ProfileComponent } from "./profile/profile.component";
import { SuportComponent } from "./suport/suport.component";
import { TrackorderComponent } from "./trackorder/trackorder.component";
import { MapsComponent } from "./trackorder/maps/maps.component";
import { EditComponent } from './edit/edit.component';

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
    SignupComponent,
    NavbarComponent,
    MapsComponent,
    EditComponent,
  ],
  imports: [MatNativeDateModule,MatSelectModule,
    MatSliderModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    MatDatepickerModule,MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyB68mElBbAESAOCCXYi3zGWc6CWMH1ppis"
    })

  ],
  providers: [OrderserviceService, AuthService, FirebaseService, UserService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
