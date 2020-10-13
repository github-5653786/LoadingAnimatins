import { Router } from '@angular/router';
import { MyService } from './../my.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string;
  password: string;
  LoaderGif: boolean;
  loaderComponent: boolean;

  constructor(private ser: MyService, private router: Router) { }

  ngOnInit() {
    this.loaderComponent = true;
    setTimeout(() => {
      this.loaderComponent = false;
    }, 2000);
  }

  SubmitForm(val) {
    this.LoaderGif = true;
    this.ser.addUsers(val);
    setTimeout(() => {
      this.LoaderGif = false;
      this.router.navigate(['/login'], { queryParams: { id: btoa(this.username) } });
    }, 3000);
  }

}
