import { Injectable } from '@angular/core';
import {ContactStore} from "./contact-store";
import {Contact} from "../contact-list/contact";

@Injectable()
export class ContactApiService implements ContactStore{

  constructor() { }

  loadContacts(){}

  saveContact(contact: Contact){}
}
