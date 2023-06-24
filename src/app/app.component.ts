import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  userRoles: string[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Verificar si el token y los roles están almacenados
    const token = localStorage.getItem('token');
    const rolesString = localStorage.getItem('roles');
    this.isLoggedIn = !!token; // Si el token existe, establecer isLoggedIn en true

    if (rolesString) {
      this.userRoles = JSON.parse(rolesString);
    }
  }

  logout(): void {
    // Realiza el proceso de cierre de sesión
    this.authService.logout();

    // Navegar a la misma ruta actual para actualizar la página
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.router.url]);
    });
  }
}
