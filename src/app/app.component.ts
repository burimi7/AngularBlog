import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {ArticleService} from './article.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title="angularblog"
  
  constructor(
   
  ) {
  }


  ngOnInit() {
   
  }




}
