import { SearchActionType } from '../action-types';

interface SearchRepositoriesAction {
    type: SearchActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
    type: SearchActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}

interface SearchRepositoriesErrorAction {
    type: SearchActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type SearchAction =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction;
