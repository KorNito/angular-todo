import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    if (username === 'Test' && password === 'Test') {
      return true;
    }

    return false;
  }
}
