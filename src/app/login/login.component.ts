import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user={
  uname:'',
  password:''
};
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  
userVerify(){
 // alert("hi")
this.authservice.loginUser(this.user)
.subscribe(
  res=>{
    localStorage.setItem('token',res.token)
    this.router.navigate(['books'])

  }
)
 }
 }