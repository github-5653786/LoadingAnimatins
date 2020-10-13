import { MyService } from './../my.service';
import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit, AfterViewInit {

  PlayersData: any;
  playername: any = "";
  isMobileView: boolean;

  constructor(private ser: MyService) { }

  ngAfterViewInit() {
    const screenWidth = 768;
    this.isMobileView = window.innerWidth < screenWidth;
  }

  ngOnInit() {
    this.ser.GetPlayers().subscribe(res => {
      this.PlayersData = res;
    });

    setTimeout(() => {
      document.querySelector(".loadings").classList.add("none");
    }, 1000);
  }

  getplayer(obj: any) {
    console.log(obj);
  }


}
