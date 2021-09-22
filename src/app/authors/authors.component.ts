import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorserviceService } from '../authorservice.service';
import { AuthService } from '../auth.service';
//import { AuthorModel } from './author.model';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title:string="AUTHORS";
  
  books=[{
     bookUrl:'',
     bookName:'',
     bookAuthor:'',
     bookGenre:'',
     bookDescription:''
    }]
     
imageWidth:number=150;
imageHeight:number=150;
imageMargin:number=2;

showImage:boolean=false;
  constructor(private authorservice:AuthorserviceService,private router:Router,public _auth:AuthService) { }
  toggleImage():void{
    this.showImage= !this.showImage;
    }
  ngOnInit(): void {
    this.authorservice.getAuthors().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }
  readBook(book:any){
    localStorage.setItem("readbookId",book._id.toString());
    this.router.navigate(['readauthor'])
   
  }
  editBook(book:any)
  {
    localStorage.setItem("editbookId", book._id.toString());
    this.router.navigate(['updateauthor']);

  }
  deleteBook(book:any)
{
  this.authorservice.deleteBook(book._id)
    .subscribe((data) => {
      this.books = this.books.filter((p: any) => p !== book);
    })
}}
