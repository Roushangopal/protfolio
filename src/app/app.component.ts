import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: Router) { }
  title = 'profitolio';
}
