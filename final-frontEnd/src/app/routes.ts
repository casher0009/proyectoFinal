import{Routes} from '@angular/router'

//componentes
import{SignupComponent} from './signup/signup.component'
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  {
    path:'', component: MainComponent
  },
  {
    path:'signup', component: SignupComponent
  }
]
