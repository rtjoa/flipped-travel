import React, {useState} from 'react';
import styled from 'styled-components'
import {Card, Button} from 'react-bootstrap'
import { useForm } from "react-hook-form";

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
const addNote = (title, type, lat, lng, data) => {
  fetch("/notes", {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      type: type,
      lat: lat,
      lng: lng,
      data: data
    })
  }).then(console.log("POST sucess"), error=> console.log(error));
};


 

export default (props) => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => addNote(
    values.title,
    values.type,
    props.coords.lat,
    props.coords.lng,
    values.data
  );


  return(

    <FormCard>
      
      <Card.Body>
      <Card.Title>
        Add a Place of Interest
        <hr/>
      </Card.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title:</label>
      <input type="text" placeholder="title" name="title" ref={register} />
      
      <div>
      <input name="type" type="radio" value="text" ref={register({ required: true })}/>
      <label>Text</label>
    
      <input name="type" type="radio" value="image" ref={register({ required: true })}/>
      <label>Image</label>
      </div>
      <label>More information:</label>
      <input type="text" placeholder="data" name="data" ref={register} />
      <input type="submit" />
      </form>
       </Card.Body>
      
       <Card.Footer>
         {props.coords.lat.toFixed(4)}, {props.coords.lng.toFixed(4)}
       </Card.Footer>
    </FormCard>


  )
}