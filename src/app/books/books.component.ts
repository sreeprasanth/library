import { Component, OnInit } from '@angular/core';
import { BookserviceService } from '../bookservice.service';
import { BookModel } from './book.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:string="BOOKS";
  books: BookModel[] | any;
     
imageWidth:number=150;
imageHeight:number=150;
imageMargin:number=2;

showImage:boolean=false;

  constructor(private bookservice:BookserviceService,private router:Router,public _auth:AuthService) { }
  toggleImage():void{
    this.showImage= !this.showImage;
    }

  ngOnInit(): void {
    this.bookservice.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }
readBook(book:any){
  localStorage.setItem("readbookId",book._id.toString());
  this.router.navigate(['readbook'])
 
}
editBook(book:any)
  {
    localStorage.setItem("editbookId", book._id.toString());
    this.router.navigate(['update']);

  }
deleteBook(book:any)
{
  this.bookservice.deleteBook(book._id)
    .subscribe((data) => {
      this.books = this.books.filter((p: any) => p !== book);
    })
}
}
