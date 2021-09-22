import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private signservice:SignupService,private router:Router) { }
  user={
    name:'',
    username:'',
    password:''
  };
  //constructor(private signservice:SignupService,private router:Router) { }

  ngOnInit(): void {
    
  }
  userVerif(){
    this.signservice.newuser(this.user);
  console.log("called");
  alert("sucess");
  this.router.navigate(['login']);
  }
  }
  

