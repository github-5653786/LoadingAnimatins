import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  Users: any[] = []

  constructor(public http: HttpClient) {
    this.Users = [
      {
        user: "mustafaaaa",
        password: "123"
      },
      {
        user: "savitasavi",
        password: "321"
      }
    ];
  }

  addUsers(data) {
    this.Users.push(data);
  }

  GetPlayers() {

    const headerOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'MyAuthToken'
      })
    }

    let _url = "https://demo4690221.mockable.io/getPlayersHistory";
    return this.http.get(_url, headerOptions);
  }
}
