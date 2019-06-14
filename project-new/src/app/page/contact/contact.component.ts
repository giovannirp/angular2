import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.addContact(any)
    .subscribe(contact => this.contact.push(contact));
  }

}
