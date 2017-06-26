import { Injectable } from '@angular/core';
import { LocalStorageService } from "./localstorage.service";
import { ContactApiService } from "./contact-api.service";
import { ContactStorage } from "./contact-storage";
import { Contact } from "../contact";
import { environment } from "../../../environments/environment";


@Injectable()
export class ContactService {

  contactStorage: ContactStorage;

  constructor(public contactLocalStorage: LocalStorageService,
              private contactApiService: ContactApiService) {
    this.contactStorage = environment.endPointUrl ? contactApiService : contactLocalStorage;
  }

  saveContact(contact: Contact) {
    return this.contactStorage.saveContact(contact);
  }


  deleteContact(contact: Contact) {
    return this.contactStorage.deleteContact(contact);
  }

  loadContacts() {
    return this.contactStorage.loadContacts();
  }

  findContactById(id){
    return this.contactStorage.findContactById(id);
  }
}
