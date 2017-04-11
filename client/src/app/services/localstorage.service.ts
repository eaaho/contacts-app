import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

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

}
