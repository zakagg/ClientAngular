import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  constructor() { }
  public isLoading$=new Subject<boolean>()

  showLoading(){
    this.isLoading$.next(true);
  }
  hideLoading(){
    this.isLoading$.next(false);}

}
