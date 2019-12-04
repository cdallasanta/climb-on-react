import React from 'react';

const Section = ({title, instructions, checked, handleToggle, index}) => {
  return(
    <div className="form-group">
      <h2>{title}</h2>
      <div className="instructions-text">
        {instructions}
      </div>
      <div className="form-check">
        <input type="checkbox" checked={checked} onChange={handleToggle} name={index} />
        <label htmlFor={index} >Section Completed?</label>
      </div>
    </div>
  )
}

export default Section;