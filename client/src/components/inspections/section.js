import React from 'react';

const Section = ({data: {id, title, complete, comments}, newComment, instructions, handleCheckboxToggle, handleChange, index}) => {

  function renderComments() {
    const sortedComments = comments.sort((a,b) => a.id - b.id)
    return (
      <div className="comments">
        {sortedComments.map((comment, i) =>{
          return (
            <div className="instructions-text" key={i}>
              <strong>{comment.user.fullname}: </strong>{comment.content}
            </div>
          )
        })}
        <input type="textarea" name={title} value={newComment} onChange={handleChange} />
      </div>
    )
  }

  return(
    <div className="form-group">
      <h2>{title}</h2>
      <div className="instructions-text">
        {instructions}
      </div>
      <div className="form-check">
        <input type="checkbox" checked={complete} onChange={handleCheckboxToggle} name={title} />
        <label htmlFor={title} >Section Completed?</label>
      </div>

      {renderComments()}
    </div>
  )
}

export default Section;