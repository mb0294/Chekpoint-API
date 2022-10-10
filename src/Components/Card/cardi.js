import React from "react";
import "./cardi.css";
const Cardi = ({ el }) => {
    return (
<div className="container bootstrap snippets bootdeys">
  <div className="row">
    <div className="col-md-4 col-sm-6 content-card">
      <div className="card-big-shadow">
        <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
          <div className="content">
           
            <h4 className="title"><h2>{el.name}</h2></h4>
            <h5>
              Address: {el.address.city} - {el.address.street}
            </h5>
            <h5>Email: {el.email}</h5>
            <h5>Phone: {el.phone}</h5> </div>
        </div> 
      </div>
    </div>
   
      </div>
    </div>
 
 );
};
export default Cardi;