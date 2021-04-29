import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuarioFireService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public unUsuario: Usuario;
  public flag=false;
  userForm: FormGroup;
  private isEmail =/\S+@\S+\.\S+/;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userSrv: UsuarioFireService
  ) {
    this.unUsuario = new Usuario();
  }

  ngOnInit(): void {
    this.initForm();
  }
  onLogin() {
      this.unUsuario.correo = this.userForm.value.email;
      this.unUsuario.clave = this.userForm.value.password;
      console.log(this.unUsuario);
      this.userSrv
        .BuscarUsuario(this.unUsuario)
        .valueChanges()
        .subscribe((result) => {
          if (result.length == 1) {
            localStorage.setItem('token', this.unUsuario.correo);
            this.router.navigateByUrl('home');
            console.log('existe');
          } else {
            console.log('no Existe');
          }
        });
    
  }
  
  public LoginRapido() {
    this.userForm.value.password = '12345678';
    this.userForm.value.email= "el.octavio.villegas@gmail.com";
    this.onLogin();
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
    });
  }
}
