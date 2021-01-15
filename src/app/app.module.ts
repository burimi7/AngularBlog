import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, Validators,FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    LoginComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // HttpClient
    
  ],
  providers: [FormControl],
  bootstrap: [AppComponent]
})
export class AppModule { }
