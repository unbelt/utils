import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTodoList } from '../actions/todo-list.actions';
import { ITodoState } from '../reducers';
import { getTodoListIsLoadedState, getTodoListState } from '../selectors';

@Injectable({ providedIn: 'root' })
export class TodoListModel {
    todos$ = this.store.select(getTodoListState);
    isLoaded$ = this.store.select(getTodoListIsLoadedState);

    constructor(private store: Store<ITodoState>) {}

    loadTodoList(): void {
        this.store.dispatch(loadTodoList());
    }
}
