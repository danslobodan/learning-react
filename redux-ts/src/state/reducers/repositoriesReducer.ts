import { SearchActionType } from '../action-types';
import { SearchAction } from '../actions';

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState = {
    loading: false,
    error: null,
    data: [],
};

const reducer = (
    state: RepositoriesState = initialState,
    action: SearchAction
): RepositoriesState => {
    switch (action.type) {
        case SearchActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };
        case SearchActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case SearchActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default reducer;
