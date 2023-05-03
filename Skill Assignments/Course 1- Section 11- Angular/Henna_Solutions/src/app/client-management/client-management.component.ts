import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})

export class ClientManagementComponent {

  clients = this.clientsService.getClients();
  showClients = true;

  clientForm = new FormGroup(
    {
      name: new FormControl(''),
      project: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl('')
    }
  );


  constructor(private clientsService: ClientsService) {
  }

  addClientToDB() {
  }

  ngOnInit(): void {
  }
}
