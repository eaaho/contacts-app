import { Injectable } from '@angular/core';
import {Contact} from "../contact-list/contact";
import {LocalStorageService} from "./localstorage.service";

@Injectable()
export class ContactService {

  private contact: Contact[];

  constructor(public contactStore: LocalStorageService) {  }

  saveContact(contact: Contact) {
    this.contactStore.saveContact(contact);
  }

  deleteContact(contact: Contact) {
    this.contactStore.deleteContact(contact);
  }

  findAllContacts() {
    return this.contactStore.loadData();
  }
}
