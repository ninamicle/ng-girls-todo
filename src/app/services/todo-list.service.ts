import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { StorageService } from './storage.service';

const todoListDefault: Todo[] = [{ title: 'Create components' }];
const key = 'TodoStorage';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: Todo[] = [];

  constructor(private storageService: StorageService) {
    this.todoList = this.storageService.getData(key) || todoListDefault;
  }

  addTodo(todo: Todo) {
    if (todo) {
      this.todoList.push(todo);
      this.saveList();
    }
  }
  saveList(): void {
    this.storageService.setData(key, this.todoList);
  }
  updateItem(item: Todo, changes: any): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item: Todo): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
  getTodoList(): Todo[] {
    return this.todoList;
  }
}
