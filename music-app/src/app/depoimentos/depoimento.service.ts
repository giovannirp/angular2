import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { MEAT_API } from "../app.api";
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler';
import { Depoimento } from "./depoimento/depoimento.model";

@Injectable()
export class DepoimentoService {
    constructor(private http: Http){}

    depoimentos(): Observable<Depoimento[]>{
        return this.http.get(`${MEAT_API}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }

}