import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';
import { error } from 'console';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private router:Router,private autheService:AuthService){}

  public formLogin!:FormGroup;
  errorMessage=undefined;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formLogin=this.fb.group({
      username: this.fb.control(""),
      password: this.fb.control("")
    })
  }

  handleLogin() {
    console.log(this.formLogin.value);
    let username=this.formLogin.value.username;
    let  password=this.formLogin.value.password;

      this.autheService.login(username,password).then(resp=>{
        console.log("je suis la")
        return this.router.navigateByUrl("/admin")

          }).catch(error=>{
            this.errorMessage=error;
          })
    
    }

}
