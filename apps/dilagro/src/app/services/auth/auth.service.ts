import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface AccessTokenResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  signIn(username: string, password: string): Observable<AccessTokenResponse> {
    return this.httpClient.post<AccessTokenResponse>('auth/login', {
      username,
      password,
    });
  }
}
