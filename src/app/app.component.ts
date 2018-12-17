import { Component, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { DataService } from './data.service';
import { Login } from './login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular 7';
  config: {};
  key: any;
  loginJson: Login;
  constructor(private http: HttpClient, private Data: DataService) { }
  ngOnInit(){
    this.login();
   
  }

  login(){
    const dataObj = {
      "userName" : "9037111787",
      "password" : "123456"
    }
    this.Data.getConfig(dataObj)
      .subscribe((res)=>{
        
       this.key = res.httpHeaders;
       console.log("Responce:", this.key);
        
      },(error)=>{
        
          alert("something went wrong");
        
      })
  }


}
