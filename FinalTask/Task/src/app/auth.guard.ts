import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private toaster:ToastrService)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var role=localStorage.getItem("role")
    console.log(role)
    if(role=="7")
    {
      this.toaster.success('Welcome in admin pages ');
      

      return true
    }
    else if(role=="6")
    {
    
      this.toaster.error('this is user page')
      //this.router.navigate(['Admin/'])

      return false

    }
  
    else if (role ==null)
    {
      this.toaster.error("you ar")
      return false
    }
  
  
  
  
  return false
  }}