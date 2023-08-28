// Write your code here

import './index.css'

const CommentItem = props => {
  const {id} = props

  return (
    <div className="comment-main-container">
      <div className="comment-main-container-1">
        <div className="profile-container">
          <p className="profile-paragraph">R</p>
        </div>

        <div>
          <div className="comment-container-1">
            <p className="comment-name-paragraph">Robinson</p>
            <p className="comment-time-paragraph">less than a minute</p>
          </div>

          <p className="comment-paragraph">
            There is a very thinking about a 4.0 technologies and very bad
            decesion
          </p>
        </div>
      </div>

      <div className="comment-container-2">
        <button className="like-button" type="button">
          <div className="comment-like-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              alt="like"
              className="comment-like-picture"
            />
            <p className="comment-like-paragraph">Like</p>
          </div>
        </button>

        <button className="delete-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="comment-delete-picture"
          />
        </button>
      </div>
      <hr className="horizontal-line-1" />
    </div>
  )
}

export default CommentItem
