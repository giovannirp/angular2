
import { Observable, throwError } from 'rxjs';

export class ErrorHandler {
    static handlerError(error) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        errorMessage = `Error: ${error.error.message}`;
      } else {
        // server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message} ao acessar a URL ${error.url} - ${error.statusText}`;
      }
      console.log('erro acontece por que' + errorMessage);
      return throwError(errorMessage);
    }
}
