import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/aboutcomponent/about/about.component';
import { ContactComponent } from 'src/app/contact/contact/contact.component';
import { HomeComponent } from 'src/app/homecomponent/home/home.component';
import { LoginComponent } from 'src/app/logincomponent/login/login.component';
import { RegisterComponentComponent } from 'src/app/register-component/register-component.component';

const routes: Routes = [{path :'',component:HomeComponent},{path :'about',component:AboutComponent},{path :'contact',component:ContactComponent},{path :'login',component:LoginComponent},{path :'register',component:RegisterComponentComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomemoduleRoutingModule { }
