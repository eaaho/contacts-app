import { Injectable } from '@angular/core';
import {Contact} from "../contact-list/contact";
import * as _ from "lodash";

@Injectable()
export class LocalStorageService{

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

  public loadData() {
    return this.readLocalStorage();
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
  }

  public deleteContact(contact: Contact) {
    let contacts = this.readLocalStorage();
    _.remove(contacts, function (c: Contact) {
      return _.isEqual(contact.id, c.id);
    });
    this.writeLocalStorage(contacts);
  }
}
