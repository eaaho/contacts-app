import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { ContactStorage } from "./contact-storage";
import { Contact } from "../contact";
import { Observable } from "rxjs";

@Injectable()
export class LocalStorageService implements ContactStorage {

  private storageKey = 'app-contacts';

  constructor() {
    this.prepLocalStorage();
  }

  private prepLocalStorage(){
    if (!localStorage.getItem(this.storageKey)){
      localStorage.setItem(this.storageKey, JSON.stringify([]));
    }
  }
  private readLocalStorage(){
    let info = localStorage.getItem(this.storageKey);
    return JSON.parse(info);
  }

  private writeLocalStorage(contactInfo){
    let infoString = JSON.stringify(contactInfo);
    localStorage.setItem(this.storageKey, infoString);
  }

  public loadContacts() {
    let contacts: Contact[] = this.readLocalStorage();
    return Observable.of(contacts);
  }

  public findContactById(id): Observable<Contact> {
    let contacts: Contact[] = this.readLocalStorage();
    return Observable.of(_.find(contacts, {'id': id}));
  }

  public saveContact(contact: Contact) {
    let contacts = this.readLocalStorage();
    if (!contact.id) {
      let lastSaved = <Contact>_.maxBy(contacts, 'id');
      contact.id = lastSaved ? lastSaved.id + 1 : 1;
      contacts.push(contact);
    } else {
      contacts = _.map(contacts, function (c: Contact) {
        return c.id == contact.id ? contact : c;
      });
    }
    this.writeLocalStorage(contacts);
    return Observable.of(contacts);
  }

  public deleteContact(contact: Contact) {
    let contacts = this.readLocalStorage();
    _.remove(contacts, function (c: Contact) {
      return _.isEqual(contact.id, c.id);
    });
    this.writeLocalStorage(contacts);
    return Observable.of(contacts);
  }
}
