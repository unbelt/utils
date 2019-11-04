import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap } from 'rxjs/operators';
import { ITodo } from '../../todo.interfaces';
import { loadTodoTrash, loadTodoTrashSuccess } from '../actions/todo-trash.actions';
import { ITodoState } from '../reducers';
import { getInactiveTodoListState } from '../selectors';

@Injectable()
export class TodoTrashEffects {
    listTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTodoTrash),
            switchMap(() =>
                this.store.select(getInactiveTodoListState).pipe(
                    filter(() => this.router.url.indexOf('trash') > -1),
                    map((todos: ITodo[]) => loadTodoTrashSuccess(todos))
                )
            )
        )
    );

    constructor(private actions$: Actions, private store: Store<ITodoState>, private router: Router) {}
}
