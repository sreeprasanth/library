import { Component, OnInit } from '@angular/core';
import { BookModel } from '../books/book.model';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
  title:string="BOOKS";
  book= {
    
    bookName:'',
    bookAuthor:'',
  bookGenre:'',
    bookDescription:'',
    bookUrl:''}
imageWidth:number=150;
imageHeight:number=150;
imageMargin:number=2;

showImage:boolean=false;
  constructor(private bookservice:BookserviceService,private router:Router) { }
  toggleImage():void{
    this.showImage= !this.showImage;
    }

  ngOnInit(): void {
    let bookId = localStorage.getItem("readbookId");
    this.bookservice.getBook(bookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }

}
