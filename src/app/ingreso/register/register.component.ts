import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from '../../clases/usuario';
import { Router } from '@angular/router';
import { UsuarioFireService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  public unUsuario: Usuario;
  private isEmail =/\S+@\S+\.\S+/;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioSrv: UsuarioFireService
  ) {
    this.unUsuario = new Usuario();
  }

  ngOnInit(): void {
    this.initForm();
  }
  onRegister() {
    if (this.userForm.valid) {
      this.unUsuario.correo = this.userForm.value.email;
      this.unUsuario.clave = this.userForm.value.password;
      this.usuarioSrv.Crear(this.unUsuario);
      this.usuarioSrv
        .BuscarUsuario(this.unUsuario)
        .valueChanges()
        .subscribe((result) => {
          if (result.length == 1) {
            console.log('ERROR usuario ya registrado');
          } else {
            localStorage.setItem('token', this.unUsuario.correo);
            this.usuarioSrv.Crear(this.unUsuario);
            this.router.navigateByUrl('home');
            console.log('Usuario registrado!');
          }
        });
      
    }
  }

  MatchPassword(field: string) {
    let password = this.userForm.get('password').value;
    let confirmPassword = this.userForm.get(field).value;
    const validateField = this.userForm.get('password');
    const cP = this.userForm.get(field);
    let passwordMatch: string;

    if (!validateField.valid && validateField.touched && !cP.valid && cP.touched) {
      passwordMatch = 'is-invalid';
      cP.setErrors({ passwordMatch: true });
    } else if (validateField.valid ) {
      if (password != confirmPassword) {
        passwordMatch = 'is-invalid';
        cP.setErrors({ passwordMatch: true });
      } else {
        cP.setErrors(null);
        passwordMatch = 'is-valid';
      }
    }
    return passwordMatch;
  }

  isValidField(field: string): string {
    const validateField = this.userForm.get(field);
    return !validateField.valid && validateField.touched
      ? 'is-invalid'
      : validateField.touched
      ? 'is-valid'
      : '';
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    });
  }
}
