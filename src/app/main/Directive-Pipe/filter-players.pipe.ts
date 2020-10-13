import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPlayers'
})
export class FilterPlayersPipe implements PipeTransform {

  players: any[] = [];

  transform(value: any[], searchedVal: string) {
    if (searchedVal == "") return value;

    this.players = [];
    value.filter(val => {
      if (val.name.toLowerCase().match(searchedVal)) {
        this.players.push(val);
      }
    });
    return this.players;
  }
}
