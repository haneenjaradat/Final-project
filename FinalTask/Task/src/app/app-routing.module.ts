import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './aboutcomponent/about/about.component';
import { AuthUserGuard } from './auth-user.guard';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact/contact.component';
import { HomeComponent } from './homecomponent/home/home.component';
import { LoginComponent } from './logincomponent/login/login.component';
import { HomemoduleModule } from './Module/homemodule/homemodule.module';
const routes: Routes = [{path :'',loadChildren:()=>(import('./Module/homemodule/homemodule.module').then((x)=>x.HomemoduleModule))},
{path :'Admin',loadChildren:()=>(import('./adminmodule/admin/admin.module').then((x)=>x.AdminModule)),canActivate:[AuthGuard]},
{path :'User',loadChildren:()=>(import('./usermodule/user/user.module').then((x)=>x.UserModule)),canActivate:[AuthUserGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
