import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent {
  todos = [
    { id: 1, description: 'Learn HTML' },
    { id: 2, description: 'Learn CSS' },
    { id: 3, description: 'Learn TypeScript' },
    { id: 4, description: 'Learn Angular' },
  ];
}
