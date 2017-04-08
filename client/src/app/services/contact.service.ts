import { Injectable } from '@angular/core';
import {Contact} from "../contact-list/contact";

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(0, 'Testi', 'Käyttäjä', '01234567',
        'Testikatu 3', 'Testikylä')
    ];
  }

  findContacts(): Contact[]{
    return this.contacts;
  }
}
