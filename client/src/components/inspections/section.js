import React from 'react';

const Section = ({data: {id, title, complete, comments_attributes}, newComment, instructions, handleChange, inspection}) => {

  function renderComments() {
    const sortedComments = comments_attributes.sort((a,b) => a.id - b.id)
    return (
      <div className="comments">
        {sortedComments.map((comment, i) =>{
          return (
            <div className="instructions-text" key={i}>
              <strong>{comment.user.fullname}: </strong>{comment.content}
            </div>
          )
        })}
        <input type="textarea" name={title} value={newComment} onChange={handleChange} inspection={inspection} />
      </div>
    )
  }

  return(
    <div className="form-group" id={`section-${id}`} >
      <h2>{title}</h2>
      <div className="instructions-text">
        {instructions}
      </div>
      <div className="form-check">
        <input type="checkbox" checked={complete} onChange={handleChange} name={title} inspection={inspection} />
        <label htmlFor={title} >Section Completed?</label>
      </div>

      {renderComments()}
    </div>
  )
}

export default Section;