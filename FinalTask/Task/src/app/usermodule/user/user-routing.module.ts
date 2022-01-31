import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserIndexComponent } from 'src/app/user-index/user-index.component';
import { UserComponent } from 'src/app/UserDashboard/user/user.component';

const routes: Routes = [{path :'',component:UserComponent},{path :'Index',component:UserIndexComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
