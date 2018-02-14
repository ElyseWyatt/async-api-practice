import {NEW_SUBREDDIT} from '../actions'

function newSubreddit (state = '', action) {
    console.log('switch triggered')
  switch (action.type) {
    case NEW_SUBREDDIT:
      return action.input

    default:
      return state
  }
}

export default newSubreddit