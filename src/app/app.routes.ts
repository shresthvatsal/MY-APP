import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { PollingappComponent } from './pollingapp/pollingapp.component';
import { CreatingnewpollComponent } from './creatingnewpoll/creatingnewpoll.component';
export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'forgetpassword',
        component: ForgetpasswordComponent
    },
    {
        path: 'changepassword',
        component: ChangepasswordComponent
 
    },
    {
        path:'pollingapp',
        component:PollingappComponent
    },
    {
        path:'creatingnewpoll',
        component:CreatingnewpollComponent
    },
    {
        path:'',redirectTo:'changepassword',pathMatch:'full'
    }
 
];