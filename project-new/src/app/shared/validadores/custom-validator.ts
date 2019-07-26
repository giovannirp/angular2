import { FormControl, ValidationErrors } from '@angular/forms';

export class CutomValidator {

  static cpf(control: FormControl): ValidationErrors {
    if (control.value === '43143576812') {
      return {
        cpf : { message: 'Esse não parece ser um CPF válido'}
      };
    } else {
      return null;
    }
  }
}
