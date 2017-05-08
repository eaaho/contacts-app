/**
 * Created by ekoodi on 8.5.2017.
 */
import {inject, TestBed} from '@angular/core/testing';
import * as _ from "lodash";
import {LocalStorageService} from './localstorage.service';
import {Contact} from "../contact";

describe('LocalStorageService', () => {

  let localStorageKey = 'app-contacts';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
  });

  // localstorage mock
  beforeEach(() => {
    let store = {};

    spyOn(localStorage, 'getItem').and.callFake(function (key) {
      return store[key];
    });

    spyOn(localStorage, 'setItem').and.callFake(function (key, value) {
      store[key] = value;
    });

  });

  function contactArray() {
    return [
      new Contact(1, 'first', 'contact', '78901712', 'street address', 'city'),
      new Contact(2, 'second', 'contact', '78901712', 'street address', 'city'),
      new Contact(3, 'third', 'contact', '78901712', 'street address', 'city')
    ]
  }

  it('Should initialize local storage', inject([LocalStorageService], (service: LocalStorageService) => {
    let data = localStorage.getItem(localStorageKey);
    expect(JSON.parse(data)).toEqual([]);
  }));

  it('#loadContacts Should return all contacts', inject([LocalStorageService], (service: LocalStorageService) => {
    let contacts = contactArray();
    localStorage.setItem(localStorageKey, JSON.stringify(contacts));
    let contactIDs = _.map(contacts, 'id');
    service.loadContacts().subscribe((contacts: Contact[]) => {
      expect(contacts.length).toBe(3);
      _.forEach(contacts, function (c) {
        expect(contactIDs).toContain(c.id);
      });
    });
  }));

});
