import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapPin} from '@fortawesome/free-solid-svg-icons'

const StyledNavbar = styled.div`
&{
  color:black;
  background-color: #141a5f;
  display:flex;
  flex-direction:row;
  padding: 1em 2em;
  align-items:center;
  justify-content:space-between;
  height:60px;
}
`

const StyledLink = styled(Link)`
&{
  color:white;
  text-decoration:none;
  font-weight:bold;
}`
export default (props) => {
 return(
 <StyledNavbar>
   <Navbar.Brand as={StyledLink} to="/">
     <FontAwesomeIcon icon={faMapPin} className='mr-2' style={{fontSize:'1.3em'}}/>
     Flipped Travel
     </Navbar.Brand>
   <p style={{color:'#7076ae','font-style':'italic', 'font-size':'1.2em', padding:0, margin:0}}>{props.msg}</p>
   <div className='d-flex flex-row'>
   <Nav.Link as={StyledLink} to="/explore" >Explore</Nav.Link>
   <Nav.Link as={StyledLink} to="/submit">Submit</Nav.Link>
   </div>
 </StyledNavbar>
 )
}