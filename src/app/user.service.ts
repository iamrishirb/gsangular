import { Injectable } from '@angular/core';
import { HttpHeaders,HttpParams,HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  usersList = this.httpClient.get('https://reqres.in/api/users/');

  getUser() {
    return this.usersList;
  }

}
