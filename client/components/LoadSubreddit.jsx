import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts, newSubreddits} from '../actions'


class LoadSubreddit extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    evt.preventDefault()
    this.props.dispatch(newSubreddits(evt.target.value))
  }

  render () {
   
    return (
      <div>
        <input placeholder='Find a Subreddit' onChange={this.handleChange} value={this.props.newSubreddit}/>
        <button onClick={() => this.props.dispatch(fetchPosts(this.props.newSubreddit))}
          >Fetch Posts</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newSubreddit: state.newSubreddit

  }
}

export default connect(mapStateToProps)(LoadSubreddit)
