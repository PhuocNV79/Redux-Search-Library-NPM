import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducers';

export const reducers = combineReducers({
  repositories: repositoriesReducer, // slice reducers ten la repositories
});

export type RootState = ReturnType<typeof reducers>; // lay duoc type cua reducer tra ve
