import React from 'react';
import {Link} from 'react-router-dom';

const ElementCard = ({data: {name, id}, location}) => {
  return (
    <Link to={location.pathname + `/new?elementId=${id}`} style={{textDecoration: 'none'}}>
      <div className="element-card">
        <h1>{name}</h1>
        
        <img src={require(`../images/${name.replace(/[^0-9a-z]/gi, "")}.png`)} alt={`${name}`} />
      </div>
    </Link>
  )
}

export default ElementCard;