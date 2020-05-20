import React from "react";

function Project(props) {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div className="card">
        <a href={props.deployed} target="_blank">
          <img src={props.screenshot} className="card-img" alt={`${props.name} screenshot`} />  
        </a>
        <div className="card-body">
          <h6 className="card-title">{props.name}</h6>
          <a href={props.repo} target="_blank" className="btn btn-primary">View Project Repository</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
