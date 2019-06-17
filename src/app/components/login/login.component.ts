import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private snackBar: MatSnackBar) { }
  login = new FormControl('', [Validators.required]);
  senha = new FormControl('', [Validators.required]);
  public hide = true;


  ngOnInit() {
  }

  getErrorMessage(inputName: string): string {
    if ( inputName === 'login' ) {
      return this.login.hasError('required') ? 'Informe o login para prosseguir.' : '';
    }
    
    if ( inputName === 'senha' ) {
      return this.senha.hasError('required') ? 'Informe a senha para prosseguir.' : '';
    }
    return '';
  }

  hasErrors(){
    return this.senha.hasError('required') || this.login.hasError('required');
  }

  fakeLogin(){
    if (this.senha.value == 'admin' && this.login.value === 'admin') {
      sessionStorage.setItem('isLoggedIn', "true");
      sessionStorage.setItem('token', 'talogadomesmo');
      this.route.navigate(['/home']);
    }else {
      this.snackBar.open("OPSSSS, parece que seu usuário e/ou senha estão incorretos... Aquela chave parece suspeita não ?", "OK");
    }
  }
}
