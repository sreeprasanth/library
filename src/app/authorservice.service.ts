import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthorserviceService {

  constructor(private http:HttpClient) { }
  getBook(id:any){
    return this.http.get("http://localhost:3000/author/"+id);
  }
  getAuthors(){
    return this.http.get("http://localhost:3000/authors")
  
}
newAuthor(item:any){
  return this.http.post("http://localhost:3000/insertd",{"book":item})
  .subscribe((data)=>{console.log(data)})
}
editBook(book:any)
{
  console.log('client update')
  return this.http.put("http://localhost:3000/updated",book)
  .subscribe(data =>{console.log(data)})
}
deleteBook(id:any)
{

  return this.http.delete("http://localhost:3000/removed/"+id)

}
}