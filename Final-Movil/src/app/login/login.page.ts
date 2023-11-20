// login.page.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Importa el servicio Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  isUsernameInvalid(): boolean {
    const usernameControl = this.loginForm.get('username');
    return usernameControl ? usernameControl.invalid && (usernameControl.dirty || usernameControl.touched) : false;
  }

  isPasswordInvalid(): boolean {
    const passwordControl = this.loginForm.get('password');
    return passwordControl ? passwordControl.invalid && (passwordControl.dirty || passwordControl.touched) : false;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Lógica de autenticación
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Ejemplo de validación básica (cambia esto con tu lógica de autenticación real)
      if (username === 'Roo19' && password === '12345') {
        // Navegar a la página principal después del inicio de sesión
        this.router.navigate(['/tabs']);
      } else {
        alert('Error de inicio de sesión. Verifica tu usuario y contraseña.');
      }
    }
  }
}
