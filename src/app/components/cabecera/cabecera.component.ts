import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  email!: string;
  constructor(
    private Router: Router,
    private UsersService: UsersService
  ) { }

  ngOnInit(): void {
  }
  login(){
    this.Router.navigate(['/acceso']);
  }
  logotipo:any  = '../assets/images/logotipolira.png';
  acceso() {
    return this.Router.url === '/home' || this.Router.url === '/escuela' || this.Router.url === '/bandas' || this.Router.url === '/contacto' || this.Router.url === '/eventos' || this.Router.url === '/noticias' || this.Router.url === '/socios' || this.Router.url === '/acceso';
      
  }
}

