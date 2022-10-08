import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getData(key: string): any {
    let x = localStorage.getItem(key);
    if (x != null) {
      JSON.parse(x);
    }
  }
  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
