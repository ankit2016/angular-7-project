import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type' : 'Application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }

  configUrl = 'https://smartklinic.com/kmf-services/authenticate/login';

  getConfig(_dataObj) {
    return this.http.post(this.configUrl, _dataObj , httpHeaders);
  }



}
