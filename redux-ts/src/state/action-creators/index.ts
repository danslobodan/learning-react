import axios from 'axios';
import { Dispatch } from 'redux';
import { SearchActionType } from '../action-types';
import { SearchAction } from '../actions';

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<SearchAction>) => {
        dispatch({
            type: SearchActionType.SEARCH_REPOSITORIES,
        });

        try {
            const { data } = await axios.get(
                'https://registry.npmjs.org/-/v1/search',
                {
                    params: {
                        text: term,
                    },
                }
            );

            const names = data.objects.map((result: any) => {
                return result.package.name;
            });

            dispatch({
                type: SearchActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names,
            });
        } catch (err) {
            dispatch({
                type: SearchActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message,
            });
        }
    };
};
