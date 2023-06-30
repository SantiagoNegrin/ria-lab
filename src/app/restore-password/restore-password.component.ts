import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css']
})
export class RestorePasswordComponent implements OnInit{
  email: string = '';
  token: string = '';
  password: string = '';
  confirmPassword: string = '';

  successMessage: string = '';
  errorMessage: string = '';
    
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.token = params['token'];
      console.log(this.email);
      console.log(this.token);
    });
  }

  confirmarPassword(){
    const url = 'http://localhost:5000/api/Auth/ResetPassword';

    const body = {
      password: this.password,
      confirmPassword: this.confirmPassword,
      email: this.email,
      token: this.token
    };
    console.log(body);

    this.http.post(url, body).subscribe(response => {
      this.successMessage = 'Contraseña seteada exitosamente.';
      this.errorMessage = '';
    }, error => {
      this.successMessage = '';
      this.errorMessage = 'Error: ' + error.error.title;
      console.error('Error:', error);
      // Aquí puedes manejar el error, mostrar un mensaje de error más específico, etc.
    });

  }

}
