import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  Router, RouterModule, RouterOutlet } from '@angular/router';
import { AppStateService } from '../services/app-state.service';
import { LoadingService } from '../services/loading.service';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public appStateService:AppStateService,public loadingService:LoadingService,private  router:Router) { }
  actions:Array<any>=[
    {title:"Home",route:"/home",icon:"house"},
    {title:"Products",route:"/admin/products",icon:"search"},
    {title:"NewProduct",route:"/admin/newProduct",icon:"plus"}
  ]
  currentAction:any;
  setCurrentAction(action:any) {
    this.currentAction=action;
    }
    loginAction() {
      return this.router.navigateByUrl("/login")
      }
    logoutAction() {
      this.appStateService.authState={};
      
        return this.router.navigateByUrl("/login")
      }

}
