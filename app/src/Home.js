import React from 'react'
import {Button, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default () =>{


  return (
    <>
    <Container>
      <Link to ='/explore'>Explore</Link>
      <Link to='/submit'>Submit</Link>
    </Container>
    </>
  )
}