import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TabellaComponent } from './tabella/tabella.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  name!: string;
  birthdate!: string;
  totalSeconds!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;

  constructor(public dialog: MatDialog) {}
  getDifference(): void {
    const birthdateTimestamp = new Date(this.birthdate).getTime();
    const nowTimestamp = new Date().getTime();
    this.totalSeconds = Math.floor((nowTimestamp - birthdateTimestamp) / 1000);
    this.hours = Math.floor(this.totalSeconds / 3600);
    this.minutes = Math.floor((this.totalSeconds % 3600) / 60);
    this.seconds = this.totalSeconds % 60;
  }

  openDialog() {
    this.dialog.open(TabellaComponent);
  }
}
