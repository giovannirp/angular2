import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { CutomValidator } from 'src/app/shared/validadores/custom-validator';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = [];
  formContact: FormGroup;

  constructor(private contactService: ContactService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formContact = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required]],
      cpf: ['', [Validators.required, CutomValidator.cpf]],
      email: ['', [Validators.required, Validators.email]],
      idade: ['', [Validators.required]],
      mensagem: ['', [Validators.required]]
    });
  }

  sendForm() {
    const contact: Contact = {
      nome: this.name.value,
      telefone: this.phone.value,
      cpf: this.phone.value,
      email: this.email.value,
      idade: this.idade.value,
      mensagem: this.mensagem.value
    };

    this.contactService.addContact(contact)
      .subscribe(c => {
        this.contacts.push(contact);
        this.formContact.reset();
      });
  }

  get name(): AbstractControl { return this.formContact.get('name'); }
  get phone(): AbstractControl { return this.formContact.get('phone'); }
  get cpf(): AbstractControl { return this.formContact.get('cpf'); }
  get email(): AbstractControl { return this.formContact.get('email'); }
  get idade(): AbstractControl { return this.formContact.get('idade'); }
  get mensagem(): AbstractControl { return this.formContact.get('mensagem'); }


}
