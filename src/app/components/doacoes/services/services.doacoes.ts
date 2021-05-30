import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { DoacoesGetModel } from '../model/doacoes-get';

@Injectable({
    providedIn: 'root',
})
export class DoacoesService {
  
    apiUrl = environment.apiUrl;

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    constructor(private httpClient: HttpClient) {}

    getDoadores(): Observable<DoacoesGetModel[]> {
        return this.httpClient.get<DoacoesGetModel[]>(`${this.apiUrl}/doacoes`, this.httpOptions);
    }
}
