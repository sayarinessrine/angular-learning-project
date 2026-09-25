import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import {Student } from './student/student'
import { Header} from './components/header/header'  
import { User} from './components/user/user'
import { Footer} from './components/footer/footer'
import { Notifications} from './components/notifications/notifications'
import { Navbar} from './components/navbar/navbar'
import { FriendsList } from './components/friends-list/friends-list';

@Component({
  selector: 'app-root',
  imports: [Student, Header,User,Notifications,Navbar,FriendsList,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mon-premier-projet');
}
