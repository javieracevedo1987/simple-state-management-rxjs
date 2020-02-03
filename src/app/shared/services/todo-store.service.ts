import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map} from 'rxjs/operators';
import { Todo } from '../interfaces/todo.interface';

// Source: https://dev.to/avatsaev/simple-state-management-in-angular-with-only-services-and-rxjs-41p8

@Injectable()
export class TodoStoreService {

  private readonly _todos: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  readonly todos$: Observable<Todo[]> = this._todos.asObservable();
  
  readonly completedTodos$ = this.todos$.pipe(
    map(todos => todos.filter(todo => todo.isCompleted))
  )

  private get todos(): Todo[] {
    return this._todos.getValue();
  }

  private set todos(val: Todo[]) {
    this._todos.next(val);
  }

  addTodo(title: string): void {
    this.todos = [
      ...this.todos,
      {id: this.todos.length + 1, title, isCompleted: false }
    ];
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  setCompleted(id: number) {
    let todo = this.todos.find(todo => todo.id === id);

    if(todo) {
      const index = this.todos.indexOf(todo);

      this.todos[index] = {
        ...todo,
        ...{ isCompleted: !todo.isCompleted }
      }

      this.todos = [...this.todos];
    }
  }

}