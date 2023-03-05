import axios from 'axios';
import { ActionType } from '../action-types';
import { Action } from '../actions-return-type';
import { Dispatch } from 'redux';

export const searchRepositories = (term: string) => {
  // term is name of library we want to search for
  const searchRepositories = async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: { text: term },
        }
      );

      const names: string[] = data.objects.map((pack: any) => {
        return pack.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  };

  return searchRepositories;
};
