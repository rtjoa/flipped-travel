import React , {useState} from 'react';
import MapsComponent from './components/MapsComponent';
import {Form, Button} from 'react-bootstrap';
export default()=>{
  const [coords, setCoords] = useState({lat:47.6205,lng:-122.3493});
  const updateCoords = (lat, lng) =>{
    setCoords({lat:lat, lng:lng})
  }
  const handleOnSubmit=()=>{

  }

  return(
    <>
    
      <MapsComponent updateCoords={updateCoords} coords={coords} >
        
      <Form onSubmit={handleOnSubmit()}>
        <Form.Group controlId="poiForm">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Location Name" />
        </Form.Group>
  
       <Form.Group controlId="formBasicPassword">
          <Form.Label>Latitude:</Form.Label>
          <Form.Control type="text" value = {coords.lat}/>
      </Form.Group>
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Longitude:</Form.Label>
      <Form.Control type="text" value = {coords.lng}/>
    </Form.Group>

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>


  </MapsComponent>
    </>


  )
}