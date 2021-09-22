import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddauthorsComponent } from './addauthors/addauthors.component';
import { SingleauthorComponent } from './singleauthor/singleauthor.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { AuthorserviceService } from './authorservice.service';
import { BookserviceService } from './bookservice.service';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddbooksComponent,
    UpdatebookComponent,
    SinglebookComponent,
    AuthorsComponent,
    AddauthorsComponent,
    SingleauthorComponent,
    UpdateauthorComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookserviceService,AuthorserviceService,AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true //means it can handle multiple request
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
