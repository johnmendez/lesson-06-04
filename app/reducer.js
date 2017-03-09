import unionBy from 'lodash.unionby';

function posts(state = [], action) {
  switch (action.type) {
    case 'BLOG@FINDALL_COMPLETE':
      return unionBy(action.data, state, '_id');
    case 'BLOG@ADD_COMPLETE':
        return unionBy([action.data], state, '_id');
    default:
      return state;
  }
}

function loading(state = false, action) {
  switch (action.type) {
    case 'BLOG@LOADING_START':
      return true;
    case 'BLOG@LOADING_COMPLETE':
      return false;
    default:
      return state;
  }
}

export default function (state, action) {
  return {
    posts: posts(state.posts, action),
    loading: loading(state.loading, action),
  };
}
