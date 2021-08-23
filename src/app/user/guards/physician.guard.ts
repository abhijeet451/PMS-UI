import { SharedService } from './../../shared/shared.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";


@Injectable({
    providedIn: 'root'
  })
  export class PhysicianGuard implements CanActivate {
    constructor(private authService: AuthService,private router : Router,
        private sharedService:SharedService){}
      canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): boolean {
       let role=this.sharedService.getStorageService().getLocal().retrieve('role');
        if( role=="PHYSICIAN") {
          return true;
      }
      else{
        this.router.navigateByUrl('accessDenied')
        return false;
      }
      }
    
  }