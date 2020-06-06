import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Result from "./components/Result"
import {InputGroup,Input,Button,Row,Col,Form,FormGroup} from "reactstrap"
import './App.css';
import Footer from './components/footer';



function App() {

  const [stats, setStats] = useState({
  results:[],
  loading:true
  })
  const [query, setQuery] = useState("")
  const {results,loading} = stats

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  var currentDate = yyyy + '-' + mm + '-' + dd;
  console.log(currentDate)


  const fetchData =async()=>{
   
   const data = await fetch( `https://api.covid19api.com/summary `);
    const response = await data.json();
    console.log(response)
    setStats({...stats,results:response.Countries,loading:false})
  }
    const countryResults = results.filter(country =>{
      return country.Country === query;
      })
     
  const onSubmit = e =>{
    e.preventDefault()
    fetchData();
    
    }
  const request = () =>{
  if(loading){
  return(
  <div>
  <h3>Monitoring the Cases...</h3>
  </div>
  )
  }

  }
   return (
  
    <Form>
      <FormGroup>
        <h1>COVID 19 </h1>
  <      h4>SUMMARY</h4>
    <Row>
      <Col>
        <InputGroup className="shadow">
        <Input  type="text" value={query} placeholder="Enter Country" onChange={e=>setQuery(e.target.value)}/>
        </InputGroup>
    <Button className="shadow" onClick={onSubmit}>Search</Button>
      </Col>
    </Row>
      {request()}
      {countryResults.map(result =>(
      <Result country={result.Country} confirmed={result.TotalConfirmed} recovered={result.TotalRecovered} active={result.NewConfirmed} deaths={result.TotalDeaths}/>
    ))}
    </FormGroup>
  <Footer/>
</Form>
);
}

export default App;
