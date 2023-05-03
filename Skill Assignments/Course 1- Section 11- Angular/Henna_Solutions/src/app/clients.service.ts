import { Injectable } from '@angular/core';
import { Client } from './modal/Clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clients: Client[] = [
    new Client("Bob Smith", "Hayward Park", "555-555-1234", "bsmithlikesapples@mail.com"),
    new Client("John Doe", "The Hyde Building", "555-555-4567", ""),
    new Client("Tim 5", "Supervillain Lair", "", "t5@mail.com"),
  ];

  getClients() {
    return this.clients;
  }

  constructor() { }
}



