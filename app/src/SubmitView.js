import React , {useState} from 'react';
import MapsComponent from './components/MapsComponent';
import {Form, Button, Card, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';

const FormCard = styled.div`
&{
  width:20vw;
  height:fit-content;
  margin:4em 1em;
  position: fixed;
  z-index:999;
  background-color:white;
}

`

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
    <FormCard>
      <Card.Body>
      <Form onSubmit={handleOnSubmit()}>
        <Form.Group controlId="poiName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Location Name" />
        </Form.Group>
  
        <Form.Group controlId="poiLatLng" as={Row} >
          <Col>
          <Form.Label>Latitude:</Form.Label>
          <Form.Control type="text" value = {coords.lat.toFixed(4)} plaintext readOnly/>
          </Col>
          <Col>
          <Form.Label>Longitude:</Form.Label>
          <Form.Control type="text" value = {coords.lng.toFixed(4)} plaintext readOnly/>
          </Col>
        </Form.Group>

        <Form.Group controlId="poiData">
          <Form.Label>More about this place:</Form.Label>
          <Form.Control type="text" placeholder = "text or url"/>
        </Form.Group>
        <fieldset>
        <Form.Group controlId='poiDataType'>
          <Form.Check type='radio' name='formDataType' label='image(url)' id='img'/>
          <Form.Check type='radio' name='formDataType' label='text' id='txt'/>
        </Form.Group>
        </fieldset>

      <Button variant="primary" type="submit">
        Submit
     </Button>
  </Form>
  </Card.Body>
  </FormCard>

  </MapsComponent>
    </>


  )
}