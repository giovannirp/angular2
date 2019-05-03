import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Musica } from "./musica/musica.model";
import { MEAT_API } from "../app.api";
import 'rxjs/add/operator/catch';
import { ErrorHandler } from '../app.error-handler';
import { MenuItem } from "../musica-detail/menu-item/menu-item.model";


@Injectable()
export class MusicasService {

    constructor(private http: Http){}

    musicas(): Observable<Musica[]> {

      return this.http.get(`${MEAT_API}/musicas`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }

    musicaById(id: string): Observable<Musica>{
        return this.http.get(`${MEAT_API}/musicas/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }

    reviewsOfMusic(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/musicas/${id}/reviews`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }

    menuOfMusica(id: string): Observable<MenuItem[]>{
        return this.http.get(`${MEAT_API}/musicas/${id}/menu`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError)
    }


}