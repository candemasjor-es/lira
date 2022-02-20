import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})

export class AccesoComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(public userService: UsersService,public router: Router) { }

  ngOnInit(): void {
  }
  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe( data => {
      this.userService.setToken(data.token);
      this.router.navigateByUrl('/home');
  },
  error => {
    console.log(error);
  }
  );
  }
  logout() {
    
  }
}
