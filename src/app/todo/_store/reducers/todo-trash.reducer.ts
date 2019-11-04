import { Action, createReducer, on } from '@ngrx/store';
import { ITodo } from '../../todo.interfaces';
import { emptyTodoTrash, loadTodoTrashSuccess, restoreTodo } from '../actions/todo-trash.actions';

export interface ITodoTrashState {
    todos: ITodo[];
}

export const initialTodoTrashState: ITodoTrashState = {
    todos: [],
};

export const reducer = createReducer<ITodoTrashState>(
    initialTodoTrashState,
    on(loadTodoTrashSuccess, (state, { payload: { todos } }) => ({ ...state, todos })),
    on(restoreTodo, (state, { payload: { id } }) => ({
        ...state,
        todos: state.todos.filter((todo: ITodo) => todo.id !== id),
    })),
    on(emptyTodoTrash, state => ({
        ...state,
        todos: [],
    }))
);

export function todoTrashReducer(state: ITodoTrashState, action: Action) {
    return reducer(state, action);
}
