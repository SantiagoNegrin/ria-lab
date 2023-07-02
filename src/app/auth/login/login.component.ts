import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    

    this.authService.login(username, password).subscribe(
      (response) => {
        console.log(response);
        this.router.navigateByUrl('/listar-llamados', { skipLocationChange: false }).then(() => {
          location.reload();
        });
                
      },
      (error) => {
        // Maneja el error del inicio de sesión
        console.error(error);
      }
    );
  }
}
