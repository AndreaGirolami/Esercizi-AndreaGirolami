import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
})
export class OtherComponent implements OnInit {
  utenti: any;
  constructor(private service: ServiceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.utenti = this.service.getUsers();
  }

  openDialog(utenti: any) {
    this.dialog.open(DialogComponent, {
      data: { utenti },
    });
  }
}
