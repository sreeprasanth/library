import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BooksComponent } from './books/books.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { SinglebookComponent } from './singlebook/singlebook.component';
import { AuthorsComponent } from './authors/authors.component';
import {AddauthorsComponent } from './addauthors/addauthors.component';
import{SingleauthorComponent} from './singleauthor/singleauthor.component';
import{UpdateauthorComponent} from './updateauthor/updateauthor.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'books',component:BooksComponent},
{path:'addbooks',canActivate:[AuthGuard],component:AddbooksComponent},
{path:'update',component:UpdatebookComponent},
{path:'readbook',component:SinglebookComponent},
{path:'authors',component:AuthorsComponent},
{path:'addauthors',canActivate:[AuthGuard],component:AddauthorsComponent},
{path:'readauthor',component:SingleauthorComponent},
{path:'updateauthor',component:UpdateauthorComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
