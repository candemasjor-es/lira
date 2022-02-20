import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {NgxPermissionsService, NgxRolesService} from 'ngx-permissions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private rolesService: NgxRolesService,
    private permissionsService: NgxPermissionsService) {
}

  ngOnInit(): void {
  }
 
}
