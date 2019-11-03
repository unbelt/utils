import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodoState } from '../reducers';
import { getTodoTrashState } from '../selectors';

@Injectable({ providedIn: 'root' })
export class TodoTrashModel {
    todos$ = this.store.select(getTodoTrashState);

    constructor(private store: Store<ITodoState>) {}
}
