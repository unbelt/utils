import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { ITodo } from '../../todo.interfaces';
import { loadTodoTrash } from '../actions/todo-trash.actions';
import { getTodoTrashState } from '../selectors';
import { ITodoState } from '../reducers';

@Injectable()
export class TodoTrashEffects {
    listTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTodoTrash),
            switchMap(() =>
                this.store
                    .select(getTodoTrashState)
                    .pipe(
                        map((todos: ITodo[]) =>
                            loadTodoTrash(todos.filter((todo: ITodo) => todo.isDeleted))
                        )
                    )
            )
        )
    );

    constructor(private actions$: Actions, private store: Store<ITodoState>) {}
}
