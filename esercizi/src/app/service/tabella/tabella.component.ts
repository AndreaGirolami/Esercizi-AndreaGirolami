import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  eta: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'andrea', eta: 62 },
  { position: 2, name: 'franco', eta: 87 },
  { position: 3, name: 'francesco', eta: 32 },
  { position: 4, name: 'lucia', eta: 34 },
  { position: 5, name: 'federico', eta: 22 },
  { position: 6, name: 'luna', eta: 12 },
];

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.scss'],
})
export class TabellaComponent {
  displayedColumns: string[] = ['position', 'name', 'eta'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  removeData() {
    const removedElement = this.dataToDisplay.pop();
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
    console.log('Elemento rimosso:', removedElement);
  }
}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}
