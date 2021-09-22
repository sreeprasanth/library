import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  title:string="UPDATE BOOK";
  bookItem= {
    
    bookName:'',
    bookAuthor:'',
  bookGenre:'',
    bookDescription:'',
    bookUrl:''}
 

  constructor(private bookservice:BookserviceService,private router:Router) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editbookId");
    this.bookservice.getBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.bookservice.editBook(this.bookItem);   
    alert("Success");
    this.router.navigate(['books']);
  }

}
