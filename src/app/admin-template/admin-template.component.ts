import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { AppErrorsComponent } from "../app-errors/app-errors.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-template',
  standalone: true,
  imports: [NavbarComponent, DashboardComponent, AppErrorsComponent,CommonModule,RouterModule],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {

}
