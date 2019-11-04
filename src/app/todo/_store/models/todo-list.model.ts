import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from '../../todo.interfaces';
import { addTodo, deleteTodo, loadTodoList, toggleTodoComplete } from '../actions/todo-list.actions';
import { ITodoState } from '../reducers';
import { getActiveTodoListState, getTodoListIsLoadedState } from '../selectors';

@Injectable({ providedIn: 'root' })
export class TodoListModel {
    todos$ = this.store.select(getActiveTodoListState);
    isLoaded$ = this.store.select(getTodoListIsLoadedState);

    constructor(private store: Store<ITodoState>) {}

    loadTodoList(): void {
        this.store.dispatch(loadTodoList());
    }

    addTodo(todo: ITodo): void {
        this.store.dispatch(addTodo(todo));
    }

    toggleTodoComplete(id: number): void {
        this.store.dispatch(toggleTodoComplete(id));
    }

    deleteTodo(id: number): void {
        this.store.dispatch(deleteTodo(id));
    }
}
