import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";

import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";

//servicios
import { AuthService } from "./services/auth.service";
import { routes } from "./routes";

@NgModule({
  declarations: [AppComponent, SignupComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
