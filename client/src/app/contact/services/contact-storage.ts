import {Contact} from "../contact";
import {Observable} from "rxjs";

export interface ContactStorage {
  loadContacts(): Observable<Contact[]>;
  saveContact(contact: Contact): Observable<any>;
  deleteContact(contact: Contact): Observable<any>;
}
