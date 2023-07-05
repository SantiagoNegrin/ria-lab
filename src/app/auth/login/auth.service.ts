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
          this.storeEmail(response.email);
          this.storeRoles(response.roles);
          this.storeNombre(response.nombre);
          this.storeDoc(response.documento);
        }
      })
    );
  }

  private storeToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private storeEmail(email: string): void {
    localStorage.setItem('email', email);
  }

  private storeRoles(roles: string[]): void {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  private storeNombre(nombre: string): void {
    localStorage.setItem('nombre', nombre);
  }

  private storeDoc(documento: string): void {
    localStorage.setItem('documento', documento);
  }

  logout(): void {
    this.clearToken();
    this.clearRoles();
    this.clearNombre();
    this.clearDoc();
    this.clearEmail();
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

  private clearDoc(): void {
    localStorage.removeItem('documento');
  }
  
  private clearEmail(): void {
    localStorage.removeItem('email');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getNombre(): string | null {
    return localStorage.getItem('nombre');
  }

  getDoc(): string | null {
    return localStorage.getItem('documento');
  }
  
  getEmail(): string | null {
    return localStorage.getItem('email');
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