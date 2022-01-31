
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './contact/contact/contact.component';

import { NgModule } from '@angular/core';
import { HomeComponent } from './homecomponent/home/home.component';
import { AboutComponent } from './aboutcomponent/about/about.component';
import { LoginComponent } from './logincomponent/login/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './AdminComponent/admin/admin.component';
import { UserComponent } from './UserDashboard/user/user.component';
import { IndexAdminComponent } from './index-admin/index-admin.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { OrderAdminComponent } from './order-admin/order-admin.component';
import { ToastRef, ToastrModule } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { RegisterComponentComponent } from './register-component/register-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,
    IndexAdminComponent,
    UserIndexComponent,
    OrderAdminComponent,
    RegisterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ReactiveFormsModule,FormsModule,HttpClientModule,
ToastrModule.forRoot({progressBar:true,timeOut:2000})  
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
