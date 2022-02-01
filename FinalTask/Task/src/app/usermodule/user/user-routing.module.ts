import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryOrderComponent } from 'src/app/User/history-order/history-order.component';
import { IndexComponent } from 'src/app/User/index/index.component';
import { UpdateProfileComponent } from 'src/app/User/update-profile/update-profile.component';


const routes: Routes = [{path :'',component:IndexComponent},{path :'update',component:UpdateProfileComponent},{path :'order',component:HistoryOrderComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
