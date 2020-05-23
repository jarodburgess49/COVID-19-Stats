import React from "react"
import { Card } from "reactstrap";


const Result =({country,deaths,recovered,active,confirmed}) =>{

        
    
    return(
        <div className="card">
                <h4 className="card-header bg-dark text-white text-uppercase">CASES IN {country}</h4>
                <ul className="list-group">
    
                    <li className="list-group-item ml-2">
                   <span className="badge badge-warning mr-5">ACTIVE</span>{active}
                    </li>
                    <li className="list-group-item ml-2">
                    <span className="badge badge-warning mr-5">CONFIRMED</span>{confirmed}
                     </li>
                    <li className="list-group-item ml-2">
                    <span className="badge badge-warning mr-5">DEATHS</span>{deaths}
                    </li>
                    <li className="list-group-item ml-2">
                    <span className="badge badge-warning mr-5">RECOVERED</span>{recovered}
                    </li>
                </ul>
            </div>
        
    )
}
export default Result;

//<div>
          
  //        <h1 className = "text-uppercase">{country}</h1>
            
            
  //          <div className="text-uppercase"><b>ACTIVE CASES</b>->{active}</div>
  //          
 //           <div className="text-uppercase"><b>CONFIRMED CASES</b>->{confirmed}</div>
  //          
  //          <div className="text-uppercase"><b>DEATHS</b>->{deaths}</div>
  //          
  //          <div className="text-uppercase"><b>RECOVERED</b>->{recovered}</div>
            
  //      </div>
