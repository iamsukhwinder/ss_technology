import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactUsModel } from '../models/contact-us.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private httpService : HttpClient) { }

  public sendMessage(data: ContactUsModel): Observable<any> {
    return this.httpService.post(`${environment.apiUrl}contacts/send_email`, data);
  }
}
