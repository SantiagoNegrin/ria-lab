import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginResponse } from './login-response'; // Importa la interfaz LoginResponse desde el archivo login-response.ts

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/Auth/Login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    const body = { username, password };

    return this.http.post<LoginResponse>(`${this.apiUrl}`, body).pipe(
      tap(response => {
        if (response && response.token) {
          this.storeToken(response.token);
          this.storeRoles(response.roles);
        }
      })
    );
  }

  private storeToken(token: string): void {
    localStorage.setItem('token', token);
  }
  private storeRoles(roles: string[]): void {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  logout(): void {
    this.clearToken();
    this.clearRoles();
  }
  
  private clearToken(): void {
    localStorage.removeItem('token');
  }

  private clearRoles(): void {
    localStorage.removeItem('roles');
  }
  
  getToken(): string | null {
    return localStorage.getItem('token');
  }

}
