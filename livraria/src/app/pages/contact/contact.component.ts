import { Contact } from './../../model/contact.model';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact[] = [];
  formContact: FormGroup;

  constructor(private contactService: ContactService,
              private fb: FormBuilder,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.formContact = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mensagem: ['', [Validators.required]],
    });

    this.contactService.listContact()
    .subscribe(contact => this.contact = contact);
  }

  mesagemCadastro() {
    this.toastr.success('Cadastrando com sucesso', 'cadastro');
  }

  sendForm() {
    const contact: Contact = {
      nome: this.nome.value,
      telefone: this.telefone.value,
      email: this.email.value,
      mensagem: this.mensagem.value
    };

    this.contactService.addContact(contact)
    .subscribe(c => {
      this.contact.push(contact);
      this.formContact.reset();
    });
    this.mesagemCadastro();
  }



  get nome(): AbstractControl {
    return this.formContact.get('nome');
  }

  get telefone(): AbstractControl {
    return this.formContact.get('telefone');
  }

  get email(): AbstractControl {
    return this.formContact.get('email');
  }

  get mensagem(): AbstractControl {
    return this.formContact.get('mensagem');
  }

}
