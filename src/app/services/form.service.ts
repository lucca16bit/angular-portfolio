import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    API_URL: string = 'https://java-forms-portfolio.onrender.com/forms';

    constructor(private httpClient: HttpClient) {}

    send(name: string, email: string, description: string): Observable<string>  {
        return this.httpClient.post(this.API_URL + '/contact', {name, email, description}, {responseType: 'text'});
    };
}
