import React, {useState} from 'react';
import styled from 'styled-components'
import {Card, FormControl, Button, Form} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import {motion} from 'framer-motion'

const FormCard = styled.div`
&{
  width:20vw;
  height:fit-content;
  margin:6em 0.69em;
  position: fixed;
  z-index:999;
  background-color:white;
  border-radius: 10px;
  min-width:200px;
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
  const onSubmit = values => {
    addNote(
    values.title,
    values.type,
    props.coords.lat,
    props.coords.lng,
    values.data
    )
    alert("Submitted Your Point of Interest!")
};


  return(

    <FormCard className='shadow-lg'>
      
      <Card.Body>
      <Card.Title style={{fontWeight:'bold'}}>
        Add a Place of Interest
        <hr/>
      </Card.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
      <label>Location:</label>
      <FormControl type="text" placeholder="Title" name="title" ref={register} />
      <label>More information:</label>
      <FormControl as="textarea" type="text" placeholder="Submit a description/fun fact/picture URL!" name="data" ref={register} />
      <div className='d-flex flex-row justify-content-end align-items-center'>
      <Form.Check  name="type" type="radio" value="text" ref={register({ required: true })}/>
      <label className='pt-1 pr-4'>Text</label>
    
      <Form.Check name="type" type="radio" value="image" ref={register({ required: true })}/>
      <label className='pt-1'>Image</label>
      </div>
      


     
      <Button as={motion.button} type="submit" variant="warning" className='mt-3 '
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
        Submit</Button>
  
      </form>
       </Card.Body>
      
       <Card.Footer>
         {props.coords.lat.toFixed(4)}, {props.coords.lng.toFixed(4)}
       </Card.Footer>
    </FormCard>


  )
}