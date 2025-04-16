import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'demo-2';
  istrue = true;
  a = 'Hello from Angular!';
  members = ['Alice', 'Bob', 'Charlie'];
}
