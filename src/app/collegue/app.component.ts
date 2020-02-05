import { Component } from '@angular/core';
import { mock } from './collegue.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';
  collegueinconnu = mock; 
}
