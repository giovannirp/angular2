import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl  } from '@angular/forms';

@Component({
  selector: 'app-error-component',
  templateUrl: './error-component.component.html',
  styleUrls: ['./error-component.component.scss']
})
export class ErrorComponentComponent implements OnInit {

  private readonly errorMessages = {
    required: () => 'Campo obrigatório',
    minlength: (params) => 'Tamanho mínimo  é de ' + params.requiredLength + ' caracteres',
    maxlength: (params) => 'Tamanho máximo é de ' + params.requiredLength + ' caracteres',
    pattern: (params) => 'O formato obrigatório é: ' + params.requiredPattern,
    email: (aprams) => 'Erro campo precisa ser um email',
    uniqueName: (params) => 'Esse campo precisa ser único',
    cpf: (params) => params.message
  };

  @Input() control: AbstractControlDirective | AbstractControl;

  constructor() { }

  ngOnInit() {
  }

  showdShowErros(): boolean {
    return this.control && this.control.errors && this.control.touched;
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
  }

  get firstError(): string {
    return this.listOfErrors()[0];
  }

  private getMessage(type: string, params: any) {
    return this.errorMessages[type](params);
  }

}
