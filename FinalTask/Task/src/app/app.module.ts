
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
import { IndexAdminComponent } from './index-admin/index-admin.component';
import { OrderAdminComponent } from './order-admin/order-admin.component';
import { ToastRef, ToastrModule } from 'ngx-toastr';
import { timeout } from 'rxjs';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { IndexComponent } from './User/index/index.component';
import { HistoryOrderComponent } from './User/history-order/history-order.component';
import { UpdateProfileComponent } from './User/update-profile/update-profile.component';
import { NavUDashboardComponent } from './shared/nav-udashboard/nav-udashboard.component';
import { FUDashboardComponent } from './shared/fudashboard/fudashboard.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailsOrderComponent } from './User/details-order/details-order.component';
import{​ MatDialogModule }​ from'@angular/material/dialog';
import { UpdateBalanceComponent } from './User/update-balance/update-balance.component';
import { TistimonialComponent } from './User/tistimonial/tistimonial.component';



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
    IndexAdminComponent,
    OrderAdminComponent,
    RegisterComponentComponent,
    IndexComponent,
    HistoryOrderComponent,
    UpdateProfileComponent,
    NavUDashboardComponent,
    FUDashboardComponent,
    SideBarComponent,
    DetailsOrderComponent,
    UpdateBalanceComponent,
    TistimonialComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ReactiveFormsModule,FormsModule,HttpClientModule,
ToastrModule.forRoot({progressBar:true,timeOut:2000}),
BrowserAnimationsModule,
NgbModule , 
HttpClientModule,
 MatDialogModule
  ],
  entryComponents:[DetailsOrderComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
