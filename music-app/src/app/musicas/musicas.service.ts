import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Musica } from "./musica/musica.model";
import { MEAT_API } from "../app.api";


@Injectable()
export class MusicasService {

    constructor(private http: Http){}

    musicas(): Observable<Musica[]> {

      return this.http.get(`${MEAT_API}/musicas`)
        .map(response => response.json())
    }
}