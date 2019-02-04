import jasonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jasonPlaceholder.get('./posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};
