import { Component, OnInit } from '@angular/core';
import { AuthorserviceService } from '../authorservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {
  title:string="UPDATE AUTHOR";
  bookItem= {
    
    bookName:'',
    bookAuthor:'',
  bookGenre:'',
    bookDescription:'',
    bookUrl:''}
 
  constructor(private authorservice:AuthorserviceService,private router:Router) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editbookId");
    this.authorservice.getBook(bookId).subscribe((data)=>{
      this.bookItem=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.authorservice.editBook(this.bookItem);   
    alert("Success");
    this.router.navigate(['authors']);
  }
}
