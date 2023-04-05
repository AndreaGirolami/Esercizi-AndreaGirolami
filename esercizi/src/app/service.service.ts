import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  users = [
    { nome: 'andrea', cognome: 'girolami', eta: '22' },
    { nome: 'pinco', cognome: 'bianchi', eta: '34' },
    { nome: 'pallino', cognome: 'rossi', eta: '54' },
    { nome: 'pippo', cognome: 'pluto', eta: '21' },
  ];

  constructor() {}

  getUsers() {
    return this.users;
  }

  getUser(index: number) {
    return this.users[index];
  }
}
