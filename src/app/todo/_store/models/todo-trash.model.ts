import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { emptyTodoTrash, loadTodoTrash, restoreTodo } from '../actions/todo-trash.actions';
import { ITodoState } from '../reducers';
import { getTodoTrashState } from '../selectors';

@Injectable({ providedIn: 'root' })
export class TodoTrashModel {
    todos$ = this.store.select(getTodoTrashState);

    constructor(private store: Store<ITodoState>) {}

    loadTodoTrash(): void {
        this.store.dispatch(loadTodoTrash());
    }

    restoreTodo(id: number): void {
        this.store.dispatch(restoreTodo(id));
    }

    emptyTodoTrash(): void {
        this.store.dispatch(emptyTodoTrash());
    }
}
