import { Component, Input, OnInit } from '@angular/core';
import {ArticleService} from '../article.service'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  title='hello';
  ngModel='';

  // @Input() ArticleToEdit={
  //   title:'',
  //   picture:'',
  //   description:'',
  //   dtposted:''
  // };
  ArticleToEdit={
    id: 0,
      title:'',
      picture:'',
      description:'',
      dtposted:''
    };

  constructor(
    public ArticleService:ArticleService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {    
  }



}
