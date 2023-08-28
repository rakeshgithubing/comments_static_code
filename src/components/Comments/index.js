import {Component} from 'react'
import './index.css'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  render() {
    // console.log(formatDistanceToNow(new Date())) // less than a minute
    return (
      <div className="app-container">
        <div>
          <h1 className="app-heading">Comments</h1>
          <div className="container-1">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
                alt=" comments"
                className="app-picture"
              />
            </div>

            <div className="container-2">
              <p className="app-paragraph">
                Say something about 4.0 Technologies
              </p>

              <div className="input-container">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input-name"
                />
                <textarea
                  rows="10"
                  cols="50"
                  className="input-comment"
                  placeholder="Your Comment"
                />
              </div>

              <button className="app-button" type="button">
                Add Comment
              </button>
            </div>
          </div>

          <hr className="horizontal-line" />

          <div className="comments-container">
            <div className="comments-count-container">
              <p className="comments-count">0</p>
            </div>
            <p className="comments-paragraph">Comments</p>
          </div>
        </div>

        <CommentItem />
      </div>
    )
  }
}

export default Comments
