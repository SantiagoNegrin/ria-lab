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
    const token = localStorage.getItem('token');
    const rolesString = localStorage.getItem('roles');
    this.isLoggedIn = !!token;

    if (rolesString) {
      this.userRoles = JSON.parse(rolesString);
    }
  }

  logout(): void {
    this.authService.logout();

    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      location.reload();
    });
  }

  isActiveRoute(route: string): boolean {
    return this.router.isActive(route, true);
  }

}
