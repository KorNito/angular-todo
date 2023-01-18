import { Component } from '@angular/core';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent {
  todos = [
    new Todo(1, 'Learn HTML', false, new Date()),
    new Todo(2, 'Learn CSS', false, new Date()),
    new Todo(3, 'Learn TypeScript', false, new Date()),
    new Todo(4, 'Learn Angular', false, new Date()),
  ];
}
