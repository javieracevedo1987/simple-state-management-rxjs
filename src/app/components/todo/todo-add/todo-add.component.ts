import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoStoreService } from '../../../shared/services/todo-store.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  title = new FormControl('');

  constructor(private todoStoreService: TodoStoreService) { }

  addTodo() {
    if(!this.title.value) return;
    this.todoStoreService.addTodo(this.title.value);

    this.title.patchValue('');
  }

}