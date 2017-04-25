import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import {ContactStorage} from "./contact-storage";
import {Contact} from "../contact";
import {environment} from "../../../environments/environment";

@Injectable()
export class ContactApiService implements ContactStorage {

  url = environment.endPointUrl;

  constructor(private http: Http) { }

  loadContacts() {
    return this.http
      .get(this.url)
      .map(response => response.json() as Contact[]);
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
