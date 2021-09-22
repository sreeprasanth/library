import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorserviceService } from '../authorservice.service';
//import { AuthorModel } from '../authors/author.model';
@Component({
  selector: 'app-addauthors',
  templateUrl: './addauthors.component.html',
  styleUrls: ['./addauthors.component.css']
})
export class AddauthorsComponent implements OnInit {
  title:string="ADD AUTHOR";
  constructor(private authorservice:AuthorserviceService,private router:Router) { }
 bookItem= {
    
    bookName:'',
    bookAuthor:'',
  bookGenre:'',
    bookDescription:'',
    bookUrl:''}
  ngOnInit(): void {
  }
  AddAuthor(){
    this.authorservice.newAuthor(this.bookItem);
  console.log("called");
  alert("sucess");
  this.router.navigate(['authors']);
  }
}
