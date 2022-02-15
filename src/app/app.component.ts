import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lira';
  faCoffee = faCoffee;
  faFortAwesomeAlt = faFortAwesomeAlt;
  
}
$('#elemId').width();