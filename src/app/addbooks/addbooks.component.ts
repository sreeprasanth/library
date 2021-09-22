import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';
import { BookModel } from '../books/book.model';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  title:string="ADD BOOKS";

  constructor(private bookservice:BookserviceService,private router:Router) { }
  bookItem = new BookModel(null,null,null,null,null)

  ngOnInit(): void {
  }
  AddBook(){
    this.bookservice.newBook(this.bookItem);
  console.log("called");
  alert("sucess");
  this.router.navigate(['books']);
  }

}
