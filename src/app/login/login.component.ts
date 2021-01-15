import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username='';
  password='';
  LoginResult='';

  constructor(
    private Router:Router
  ) { }

  ngOnInit(): void {
  }


  Login(){
    console.log('ciao_0')
    if(this.username=='burim' && this.password=='burim'){
      console.log('ciao')
      this.Router.navigate(['Articles'])
    }
    else{
      this.LoginResult='Username or password incorrect.'
    }
    
    console.log('ciao_2')
  }
}
