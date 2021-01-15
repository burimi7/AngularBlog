import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  ArticleToEdit={
    id: 0,
    title:'',
    picture:'',
    description:'',
    dtposted:''
  };

  ArticleResult='';
  
}
