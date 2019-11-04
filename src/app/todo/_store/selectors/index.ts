import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ITodoState, todoModuleName } from '../reducers';
import { getActiveTodos, getInactiveTodos, getTodoListIsLoaded } from './todo-list.selectors';
import { getTodoTrash } from './todo-trash.selectors';

const getTodoModule = createFeatureSelector<ITodoState>(todoModuleName);

const getTodoListSelector = createSelector(
    getTodoModule,
    state => state.list
);
const getTodoTrashSelector = createSelector(
    getTodoModule,
    state => state.trash
);

export const getActiveTodoListState = createSelector(
    getTodoListSelector,
    getActiveTodos
);
export const getInactiveTodoListState = createSelector(
    getTodoListSelector,
    getInactiveTodos
);
export const getTodoListIsLoadedState = createSelector(
    getTodoListSelector,
    getTodoListIsLoaded
);
export const getTodoTrashState = createSelector(
    getTodoTrashSelector,
    getTodoTrash
);
