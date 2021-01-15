import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {ArticleService} from '../article.service'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  title="angularblog"
  Articles;
  ArticlesTmp;
  userName
  registerForm: FormGroup;
  submitted = false;
  Article = {
    id: 0,
    title: '',
    picture: '',
    description: '',
    dtposted: ''
  }
  EditSelectedArticle=false;
  DeleteSelectedArticle:any;
  DetailsSelectedArticle=-1;
  pageSize=3;
  page =1;
  CreateNewArticle=false;

  ArticleDetails={
    id: 0,
    title: '',
    picture: '',
    description: '',
    dtposted:''
  }
  FilterArticleYear=-1;
  Archives=false;

  constructor(
    private http: HttpClient,
    private router: Router,
    public ArticleService:ArticleService
  ) {
  }


  ngOnInit() {
    this.Articles =this.ArticlesTmp = [
      { id:1, title:'Article1',picture:'https://cdn2.thecatapi.com/images/d8sbdRtLJ.jpg',description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`, dtposted:'2020-12-21' },
      { id:2, title:'Article2',picture:'https://cdn2.thecatapi.com/images/MjAwMzU3NA.jpg',description:'description2', dtposted:'2019-03-22' },
      { id:3, title:'Article3',picture:'https://cdn2.thecatapi.com/images/8b1.jpg',description:'description3', dtposted:'2018-2-6' },
      { id:4, title:'Article4',picture:'https://cdn2.thecatapi.com/images/MjA0MTUxNw.jpg',description:'description4', dtposted:'2020-7-12' },
      { id:5, title:'Article5',picture:'https://cdn2.thecatapi.com/images/MTcyODgwMQ.png',description:'description5', dtposted:'2017-6-8' },
      { id:6, title:'Article6',picture:'https://cdn2.thecatapi.com/images/1e8.jpg',description:'description6', dtposted:'2019-8-8' },
      { id:7, title:'Article7',picture:'https://cdn2.thecatapi.com/images/a3l.jpg',description:'description7', dtposted:'2021-3-3' },
      { id:8, title:'Article8',picture:'https://cdn2.thecatapi.com/images/IbSJ4PKGY.jpg',description:'description8', dtposted:'2018-7-7' },
    ];
    
    // this.GetArticles();
  }

  GetArticles() {
    const headerDict = {
      'Authorization': 'Bearer fp9plOmd1Qt1Cwgm5YbDvXUAlR3TQPPxz8sapQmZUloqgDqCRs'
    }

    const requestOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer fp9plOmd1Qt1Cwgm5YbDvXUAlR3TQPPxz8sapQmZUloqgDqCRs'
      })
    };

    // const httpheaders = new HttpHeaders().set('Authorization', 'Bearer fp9plOmd1Qt1Cwgm5YbDvXUAlR3TQPPxz8sapQmZUloqgDqCRs')
    this.http.get('https://api.webbytechexpert.com/devTest/api.php', requestOptions).subscribe((data) => {
      this.Articles = data;
      this.ArticlesTmp = data
    }
    )

    
    this.Articles =this.ArticlesTmp = [
      { title:'Article1',picture:'https://cdn2.thecatapi.com/images/d8sbdRtLJ.jpg',description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`, dtposted:'2020-12-21' },
      { title:'Article2',picture:'https://cdn2.thecatapi.com/images/MjAwMzU3NA.jpg',description:'description2', dtposted:'2019-03-22' },
      { title:'Article3',picture:'https://cdn2.thecatapi.com/images/8b1.jpg',description:'description3', dtposted:'2018-2-6' },
      { title:'Article4',picture:'https://cdn2.thecatapi.com/images/MjA0MTUxNw.jpg',description:'description4', dtposted:'2020-7-12' },
      { title:'Article5',picture:'https://cdn2.thecatapi.com/images/MTcyODgwMQ.png',description:'description5', dtposted:'2017-6-8' },
      { title:'Article6',picture:'https://cdn2.thecatapi.com/images/1e8.jpg',description:'description6', dtposted:'2019-8-8' },
      { title:'Article7',picture:'https://cdn2.thecatapi.com/images/a3l.jpg',description:'description7', dtposted:'2021-3-3' },
      { title:'Article8',picture:'https://cdn2.thecatapi.com/images/IbSJ4PKGY.jpg',description:'description8', dtposted:'2018-7-7' },
    ];


  }

NewArticle(){
  this.ArticleService.ArticleResult='';

  const headerDict = {
    'Authorization': 'Bearer fp9plOmd1Qt1Cwgm5YbDvXUAlR3TQPPxz8sapQmZUloqgDqCRs'
  }

  const requestOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer fp9plOmd1Qt1Cwgm5YbDvXUAlR3TQPPxz8sapQmZUloqgDqCRs'
    })
  };

  this.http.post('https://api.webbytechexpert.com/devTest/api.php', 
  {
    title: this.Article.title,
    picture: this.Article.picture,
    description: this.Article.description
  },
  requestOptions
  ).subscribe((data) => {
    this.ArticleService.ArticleResult = JSON.stringify(data);
      this.GoToArticles();
  },
  error=>{
    this.ArticleService.ArticleResult = JSON.stringify(error);
  }
  
  )
}

DeleteArticle(ID){
  
  const headerDict = {
    'Authorization': 'Bearer fp9plOmd1Qt1Cwgm5YbDvXUAlR3TQPPxz8sapQmZUloqgDqCRs'
  }

  const requestOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer fp9plOmd1Qt1Cwgm5YbDvXUAlR3TQPPxz8sapQmZUloqgDqCRs'
    })
  };

  this.http.delete('https://api.webbytechexpert.com/devTest/api.php?id='+ID, requestOptions
  ).subscribe((data) => {
    this.ArticleService.ArticleResult = JSON.stringify(data);
      this.GoToArticles();

  },
  error=>{
    this.ArticleService.ArticleResult = JSON.stringify(error);
  }
  
  )

}

GetYearArray(){
  let ArrayDates=[];
  for(var i=0;i<this.Articles.length;i++){
if(!ArrayDates.includes( new Date(this.Articles[i].dtposted).getFullYear())){
  ArrayDates.push( new Date(this.Articles[i].dtposted).getFullYear() )
}

  }

  return ArrayDates.sort()
}

GetFilteredArticles(){
  this.ArticlesTmp = this.Articles.filter(x=> new Date(x.dtposted).getFullYear() == this.FilterArticleYear )
}

GoToArticles(){
  this.ArticlesTmp=this.Articles;
  this.DetailsSelectedArticle=-1; 
  this.Archives=false; 
  this.CreateNewArticle=false;
}

EditArticle(){
    
  this.ArticleService.ArticleResult='';

  const headerDict = {
    'Authorization': 'Bearer fp9plOmd1Qt1Cwgm5YbDvXUAlR3TQPPxz8sapQmZUloqgDqCRs'
  }

  const requestOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer fp9plOmd1Qt1Cwgm5YbDvXUAlR3TQPPxz8sapQmZUloqgDqCRs'
    })
  };

  this.http.put('https://api.webbytechexpert.com/devTest/api.php?id='+this.ArticleService.ArticleToEdit.id, 
  {
    title: this.ArticleService.ArticleToEdit.title,
    picture: this.ArticleService.ArticleToEdit.picture,
    description: this.ArticleService.ArticleToEdit.description
  },
  requestOptions
  ).subscribe((data) => {
    this.ArticleService.ArticleResult = JSON.stringify(data);
    this.GoToArticles();
  },
  error=>{
    this.ArticleService.ArticleResult = 'Error '+error.status+': '+error.error.reason;
  }
  
  )
}

}
