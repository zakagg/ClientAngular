import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable, of } from 'rxjs';
import { AppStateService } from './app-state.service';
import { jwtDecode } from 'jwt-decode';
import { Token } from '@angular/compiler';
import { MyJwtPayload } from '../../../model/MyJwtPayload.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private appState:AppStateService) { }
  async login(username:string,password:string){
    let user= await firstValueFrom(this.http.get<any>(`http://localhost:8089/users/${username}`));
    if(password==atob(user.password)){
      let token=user.token
      
      let userPassword=btoa (user.password);
      let decodedJwt = jwtDecode<MyJwtPayload>(user.token);
      this.appState.authState={
        isAuthentificated: true,
        username:decodedJwt.sub,
        roles:decodedJwt.role,
        token:token,

      }
      
      
      return Promise.resolve(true)
    }
    return Promise.reject("Bad credentials");
  }
}
