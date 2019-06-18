import { Pipe } from '@angular/core';
import { ContactService } from './../../services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {


  contact = [] ;
  listaContact: Contact[] = [];
  const mensagem = '';

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.getContact()
    .subscribe(listaContact => this.listaContact = listaContact);
  }

}
