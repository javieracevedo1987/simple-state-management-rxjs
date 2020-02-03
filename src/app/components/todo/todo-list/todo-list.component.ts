import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../../shared/interfaces/todo.interface';
import { TodoStoreService } from '../../../shared/services/todo-store.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  todoList$: Observable<Todo[]>;

  constructor(private todoStoreService: TodoStoreService) { }

  ngOnInit() {
    this.todoList$ = this.todoStoreService.todos$;
  }

  remove(index: number) {
    this.todoStoreService.removeTodo(index);
  }

  complete(index: number) {
    this.todoStoreService.setCompleted(index);
  }

}