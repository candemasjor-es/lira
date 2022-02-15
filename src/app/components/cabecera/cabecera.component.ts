import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(
    private Router: Router,
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.Router.navigate(['/acceso']);
  }
  logotipo:any  = '../assets/images/logotipolira.png';
  acceso() {
    return this.Router.url === '/home';
  }
}
