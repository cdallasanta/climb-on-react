import React from 'react';
import {Link} from 'react-router-dom';

const Element = ({data: {elemName, id}}) => {
  return (
    <div class="element-card">
      <div class="element-card-links">
        <h3>{elemName}</h3>
        <ul>
          <li><Link to={"/elements/${id}/preuse_inspections/new"}>Preuse Inspections</Link></li>
          <li><Link to={"/elements/${id}/periodic_inspections/new"}>Periodic Inspections</Link></li>
          <li><Link to={"/elements/${id}"}>View/change element details</Link></li>
        </ul>
      </div>
      <img src={"../public.images/${elemName}.jpeg"} />
    </div>
  )
}

export default Element;