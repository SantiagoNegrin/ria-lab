import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoginResponse } from './login-response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/Auth/Login';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<LoginResponse> {
    const body = { username, password };

    return this.http.post<LoginResponse>(`${this.apiUrl}`, body).pipe(
      tap(response => {
        if (response && response.token) {
          this.storeToken(response.token);
          this.storeRoles(response.roles);
          this.storeNombre(response.nombre);
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

  private storeNombre(nombre: string): void {
    localStorage.setItem('nombre', nombre);
  }

  logout(): void {
    this.clearToken();
    this.clearRoles();
    this.clearNombre();
  }

  private clearToken(): void {
    localStorage.removeItem('token');
  }

  private clearRoles(): void {
    localStorage.removeItem('roles');
  }

  private clearNombre(): void {
    localStorage.removeItem('nombre');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getNombre(): string | null {
    return localStorage.getItem('nombre');
  }

  getRoles(): string[] {
    const rolesString = localStorage.getItem('roles');

    if (rolesString) {
      return JSON.parse(rolesString);
    } else {
      return [];
    }
  }

  redirectLogin() {
    this.router.navigateByUrl('/');
  }

  redirectHome() {
    this.router.navigateByUrl('/listar-llamados');
  }
}
