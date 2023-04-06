import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TabellaComponent } from './tabella/tabella.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(TabellaComponent);
  }
}
