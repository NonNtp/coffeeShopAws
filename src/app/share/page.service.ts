import { Injectable } from '@angular/core';
import { friends } from './mockfriend';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor() {}

  getPages() {
    return friends;
  }
}
