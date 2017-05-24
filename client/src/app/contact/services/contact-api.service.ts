import { Injectable } from '@angular/core';
import {ContactStorage} from "./contact-storage";
import {Contact} from "../contact";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {HttpService} from "../utils/http.service";

@Injectable()
export class ContactApiService implements ContactStorage {

  private url : string = environment.endPointUrl;

  constructor(private http: HttpService) { }

  loadContacts() {
    return this.http
      .get(this.url)
      .map(response => response.json() as Contact[]);
    }

  findContactById(id): Observable<Contact> {
    return this.http
      .get(this.url)
      .map(function (response) {
        return response.json() as Contact;
      });
  }


  saveContact(contact: Contact){
    return contact.id ? this.updateContact(contact) : this.createContact(contact);
    }

  createContact(contact: Contact){
    return this.http.post(this.url, contact);
    }

  updateContact(contact: Contact){
    return this.http.put(this.url + '/' + contact.id, contact);
  }

  deleteContact(contact: Contact){
    return this.http.delete(this.url + '/' + contact.id);
  }
}
