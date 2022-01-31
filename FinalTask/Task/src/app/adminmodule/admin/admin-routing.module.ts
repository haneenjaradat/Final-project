import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/AdminComponent/admin/admin.component';
import { OrderAdminComponent } from 'src/app/order-admin/order-admin.component';

const routes: Routes = [{path :'',component:AdminComponent},{path :'order',component:OrderAdminComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
