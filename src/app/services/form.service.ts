import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class FormService {
    constructor(private httpClient: HttpClient) {}

    send(name: string, email: string, description: string): Observable<string> {
        return this.httpClient.post(
            environment.API_URL + '/contact',
            { name, email, description },
            { responseType: 'text' }
        );
    }
}
