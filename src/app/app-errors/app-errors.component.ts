import { Component } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-errors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-errors.component.html',
  styleUrl: './app-errors.component.css'
})
export class AppErrorsComponent {
  constructor(public appStateService:AppStateService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

}
