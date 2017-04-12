import {Contact} from "../contact-list/contact";

export interface ContactStore {
  loadData();
  saveContact(contact: Contact);
}
