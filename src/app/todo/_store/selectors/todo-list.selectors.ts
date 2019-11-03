import { ITodoListState } from '../reducers/todo-list.reducer';

export const getTodos = (state: ITodoListState) => state.todos;
export const getTodoListIsLoaded = (state: ITodoListState) => state.isLoaded;
