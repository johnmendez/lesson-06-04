// app/actions/post.js

const url = 'https://tiny-tn.herokuapp.com/collections/kl-blog';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

function loading() {
  return {
    type: 'BLOG@LOADING_START'
  };
}

function loadComplete() {
  return {
    type: 'BLOG@LOADING_COMPLETE'
  };
}

function addComplete(data) {
  return {
    type: 'BLOG@ADD_COMPLETE',
    data
  };
}

function findAllComplete(data) {
  return {
    type: 'BLOG@FINDALL_COMPLETE',
    data
  };
}

export function add (values) {
  return (dispatch) => {
    const data = {
      ...values,
      // Add a string date value to the form values
      date: (new Date()).toISOString(),
    };
    dispatch(loading());

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers,
    }).then(r => r.json())
      .then((post) => {
        dispatch(loadComplete());
        dispatch(addComplete(post));
      });
  };
}

export function destroy(id) {

}

export function findAll() {
  return (dispatch) => {
    dispatch(loading());

    return fetch(url)
      .then(r => r.json())
      .then((posts) => {
        dispatch(loadComplete());
        dispatch(findAllComplete(posts));
      });2
  }
}

export function findOne(id) {

}
