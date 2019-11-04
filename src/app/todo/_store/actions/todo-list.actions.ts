import { createAction } from '@ngrx/store';
import { ITodo } from '../../todo.interfaces';
import { actionType } from './action-type';

export const loadTodoList = createAction(actionType('[TODO List] Load'));

export const loadTodoListSuccess = createAction(actionType('[TODO List] Load success'), (todos: ITodo[]) => ({
    payload: { todos },
}));

export const loadTodoListFailure = createAction(actionType('[TODO List] Load failure'), (error: Error) => ({
    error,
}));

export const addTodo = createAction(actionType('[TODO] Add'), (todo: ITodo) => ({
    payload: { todo },
}));

export const toggleTodoComplete = createAction(actionType('[TODO] Toggle complete'), (id: number) => ({
    payload: { id },
}));

export const deleteTodo = createAction(actionType('[TODO] Delete'), (id: number) => ({
    payload: { id },
}));
