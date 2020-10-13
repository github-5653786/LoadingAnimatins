import { MyService } from './../my.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  LoaderGif: boolean;
  LoadingBoxes: boolean;

  constructor(private ser: MyService, private router: Router) { }

  ngOnInit() {
    this.LoadingBoxes = true;
    setTimeout(() => {
      this.LoadingBoxes = false;
    }, 1000);
  }


  SubmitForm() {
    let userdata = this.ser.Users;

    userdata = userdata.filter(val => {
      return val.user == this.username;
    });

    if (userdata.length === 0) {
      alert("Username Not Found...! Please register first.");
    } else {
      userdata.forEach(ele => {
        if (ele.user == this.username && ele.password == this.password) {
          this.LoaderGif = true;
          setTimeout(() => {
            this.LoaderGif = false;
            this.router.navigate(['/players'], { queryParams: { id: btoa(this.username) } });
          }, 3000);
        } else {
          alert("Invalid Credentials...!");
        }
      })
    }
  }

}
