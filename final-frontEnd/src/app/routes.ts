import{Routes} from '@angular/router'

//componentes
import{AppComponent} from './app.component'
import{SignupComponent} from './signup/signup.component'

export const routes: Routes = [
  {
    path:'home', component: AppComponent,
  },
  {
    path:'signup', component: SignupComponent
  }
]
