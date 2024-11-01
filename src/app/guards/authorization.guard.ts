import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppStateService } from '../services/app-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private router: Router,private appStateService:AppStateService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Your authorization logic here, e.g., checking if the user is authenticated
   
    console.log(this.appStateService.authState.roles)
    if (this.appStateService.authState.roles.includes("ADMIN")) {
      return true;
    } else {
      this.router.navigate(['/admin/notauthorized']); // Redirect to login if not authorized
      return false;
    }
  }
}
