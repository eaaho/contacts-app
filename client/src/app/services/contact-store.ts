import {Contact} from "../contact-list/contact";

export interface ContactStore {
  loadContacts();
  saveContact(contact: Contact);
}
