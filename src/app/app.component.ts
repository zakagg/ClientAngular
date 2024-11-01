import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  RouterModule } from '@angular/router';
import { CommonModule  } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AppErrorsComponent } from "./app-errors/app-errors.component";
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, DashboardComponent, AppErrorsComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  title = 'client';
  
}
