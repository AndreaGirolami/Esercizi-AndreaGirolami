import { Component, OnInit, Inject } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { utenti: any }
  ) {}

  ngOnInit(): void {
    console.log(this.data.utenti);
  }
}
