import AuthorApi from '../api/mockauthorapi';
import * as types from './actiontypes';

export function loadAuthorSuccess(authors){
    return {type: types.LOAD_AUTHORS_SUCCESS, authors: authors};
}

export function loadAuthors(){
    return dispatch => {
        // make api call here
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}