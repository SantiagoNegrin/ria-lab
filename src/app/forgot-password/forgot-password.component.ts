import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  confirmar(){
    const url = 'http://localhost:5000/api/Auth/ForgotPassword';

    const body = {
      email: this.email
    };

    this.http.post(url, body).subscribe(response => {
      this.successMessage = 'Email enviado.';
      this.errorMessage = '';
    }, error => {
      this.successMessage = '';
      this.errorMessage = 'Error: ' + error.error.title;
      console.error('Error:', error);
      // Aquí puedes manejar el error, mostrar un mensaje de error más específico, etc.
    });

  }
}
