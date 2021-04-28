import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioFireService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-quiensoy',
  templateUrl: './quiensoy.component.html',
  styleUrls: ['./quiensoy.component.scss']
})
export class QuiensoyComponent implements OnInit {
  token:any;
  public githubProfile:any;

  constructor(private router: Router, private perfGitHub: UsuarioFireService) { this.token = ''; }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if(this.token == null)
    {
      this.router.navigateByUrl("login");
    }
    this.myProfileGitHub();
    
  }
  public myProfileGitHub(){
    this.perfGitHub.getProfileGitHub().subscribe((data)=>{
      this.githubProfile=data;
    });
  }
}
