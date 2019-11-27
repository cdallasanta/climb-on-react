import React from 'react';
import {Link} from 'react-router-dom';

const ElementCard = ({data: {name, id}}) => {
  return (
    <Link to="">
      <div className="element-card">
        <h3>{name}</h3>
        
        <img src={require(`../images/${name.replace(/[^0-9a-z]/gi, "")}.png`)} alt={`${name}`} />
      </div>
    </Link>
  )
}

export default ElementCard;