import { Component, OnInit } from '@angular/core';
import { AuthorserviceService } from '../authorservice.service';
@Component({
  selector: 'app-singleauthor',
  templateUrl: './singleauthor.component.html',
  styleUrls: ['./singleauthor.component.css']
})
export class SingleauthorComponent implements OnInit {
  title:string="AUTHOR";
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
  constructor(private authservice:AuthorserviceService) { }
  toggleImage():void{
    this.showImage= !this.showImage;
    }
  ngOnInit(): void {
    let bookId = localStorage.getItem("readbookId");
    this.authservice.getBook(bookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }

}
