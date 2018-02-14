import request from 'superagent'

export const SHOW_ERROR = 'SHOW_ERROR'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const NEW_SUBREDDIT = 'NEW_SUBREDDIT'

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  }
}
//This one is necessary for the loading icon. It's the beginning of the request but isn't changing any data.


export const receivePosts = (posts) => {
  return {
    type: RECEIVE_POSTS,
    posts: posts.map(post => post.data)
  }
}
//This one is the final thing here and receives the post

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}
//This throws up an error if the api doesn't work. 'errorMessage' comes from the error-message reducer



export const newSubreddits = (input) => {
  console.log('action triggered', input)
  return {
    type: NEW_SUBREDDIT,
    input: input
  }
}

// This will pull in new subreddits



export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .end((err, res) => {
        if (err) {
          dispatch(showError(err.message))
          return
        }
        dispatch(receivePosts(res.body))
      })
  }
}

//This is the thunk, and the main function. It runs through requesting, then receiving. If an error, it shows error.


