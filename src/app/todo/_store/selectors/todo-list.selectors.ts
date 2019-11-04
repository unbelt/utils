import { ITodo } from '../../todo.interfaces';
import { ITodoListState } from '../reducers/todo-list.reducer';

export const getActiveTodos = (state: ITodoListState) => state.todos.filter((todo: ITodo) => !todo.isInTrash);

export const getInactiveTodos = (state: ITodoListState) =>
    state.todos.filter((todo: ITodo) => todo.isInTrash && !todo.isDeleted);

export const getTodoListIsLoaded = (state: ITodoListState) => state.isLoaded;
