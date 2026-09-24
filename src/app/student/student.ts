import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
  name='nessrine';
  age=24;
  imageUrl = 'https://picsum.photos/150';
  changeName(){
    this.name='student';
  }
}

