import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo.model';
import { TodoListService } from '../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  constructor(private srv: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.srv.getTodoList();
  }
  addTodo(todo: Todo) {
    if (todo) {
      this.srv.addTodo(todo);
    }
  }
  removeItem(item: Todo) {
    this.srv.deleteItem(item);
  }

  completeItem(item: Todo, changes: any) {
    this.srv.updateItem(item, changes);
  }
}
