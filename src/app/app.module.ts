import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo/todo-list/todo-list.component';
import { TodoStoreService } from './shared/services/todo-store.service';
import { TodoAddComponent } from './components/todo/todo-add/todo-add.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, FontAwesomeModule ],
  declarations: [ AppComponent, TodoComponent, TodoListComponent, TodoAddComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TodoStoreService]
})
export class AppModule { }
