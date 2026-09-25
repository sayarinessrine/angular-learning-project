import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  name='nessrine';
  //email='nessrine@example.com'
  email=signal('nessrine@example.com...');

}
