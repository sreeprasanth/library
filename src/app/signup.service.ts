import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  newuser(item:any){
    return this.http.post("http://localhost:3000/signup",{"user":item})
    .subscribe((data)=>{console.log(data)})
  }
}
