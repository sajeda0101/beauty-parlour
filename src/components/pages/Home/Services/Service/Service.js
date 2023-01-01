import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    console.log(service)
    const {name,img,description}=service

    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-3 mx-auto">
        <figure><img src={img} alt={name} className='w-96 h-72 p-3 ' /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0,150)}</p>
          <div className="card-actions justify-end">
        <Link to=''><button className="btn btn-primary" >See More</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Service;