import React from "react"


const Result =({country,deaths,recovered,active,confirmed}) =>{
    
    return(
        <div>
          
          <h1 className = "text-uppercase">{country}</h1>
            
            
            <div className="text-uppercase"><b>ACTIVE CASES</b>->{active}</div>
            
            <div className="text-uppercase"><b>CONFIRMED CASES</b>->{confirmed}</div>
            
            <div className="text-uppercase"><b>DEATHS</b>->{deaths}</div>
            
            <div className="text-uppercase"><b>RECOVERED</b>->{recovered}</div>
            
        </div>
        
    )
}
export default Result;
