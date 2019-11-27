import React from 'react';
import {Link} from 'react-router-dom';

const Element = ({data: {name, id}}) => {
  return (
    <div className="element-card">
      <div className="element-card-links">
        <h3>{name}</h3>
        <ul>
          <li><Link to={`/elements/${id}/preuse_inspections/new`}>Preuse Inspections</Link></li>
          <li><Link to={`/elements/${id}/periodic_inspections/new`}>Periodic Inspections</Link></li>
          <li><Link to={`/elements/${id}`}>View/change element details</Link></li>
        </ul>
      </div>
      
      <img src={require(`../../public/images/${name.replace(/[^0-9a-z]/gi, "")}.png`)} alt={`${name}`} />
    </div>
  )
}

export default Element;