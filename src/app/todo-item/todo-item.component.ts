import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | null = null;
  @Output() remove = new EventEmitter<Todo>();
  @Output() update = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  removeItem() {
    if (this.todo) {
      this.remove.emit(this.todo);
    }
  }

  completeItem() {
    this.update.emit({
      item: this.todo,
      changes: { status: !this.todo?.status },
    });
    console.log(this.todo);
  }
}
