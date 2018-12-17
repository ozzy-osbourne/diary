import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor() { }

  getItem(value) {
    return JSON.parse(localStorage.getItem(value));
  }

  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
