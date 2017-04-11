import { Injectable } from '@angular/core';
import {Contact} from "../contact-list/contact";

@Injectable()
export class ContactService {

  private contacts: Contact[];

  constructor() {
    this.contacts = [
      new Contact(0, 'Testi', 'Käyttäjä', '01234567','Testikatu 3', 'Testikylä'),
      new Contact(1, 'Joku', 'Toinen', '98776543', 'Koepolku 2', 'Hikiä'),
      new Contact(2, 'Ite', 'Piru','666666666','Pahakuja 6', 'Helkutti')
    ];
  }

  getContacts(): Contact[]{
    return this.contacts;
  }
}
