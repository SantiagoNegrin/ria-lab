import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.logout();
    // Realiza cualquier otra acción necesaria al cerrar sesión
    // Por ejemplo, redirige al usuario a la página de inicio de sesión
    this.router.navigate(['']);
  }
}
