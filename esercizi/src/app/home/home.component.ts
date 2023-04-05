import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  tiles: Tile[] = [
    { text: 'componente 1', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'componente 2', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'componente 3', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'componentec 4', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
