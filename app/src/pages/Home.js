import React from 'react'
import {Button, Tooltip, OverlayTrigger} from 'react-bootstrap'
import {motion} from 'framer-motion'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapPin} from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'

const Logo = styled.div`
&{
 color:white;
 font-size:4rem;
 font-weight:'bold'
}`

const MainDiv = styled.div`
&{

  background:linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url("https://www.free-largeimages.com/wp-content/uploads/2014/11/Google_world_map-9.png");
  color:black;
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:end;
}`

const StyledButton = styled(Button)`
&{
  padding:1rem 5rem;
  margin:1rem 0.5rem;
  font-size:1.3rem;
  border-radius:5px;
}
`



export default () =>{

  const ExploreInfo = (props) => (
    <Tooltip id="button-tooltip"{...props}>
      Check out landmarks neraby and see fun facts about them
    </Tooltip>
  );
  const SubmitInfo = (props) => (
    <Tooltip id="button-tooltip-2"{...props}>
      Submit a photo or fun fact to be featured for a landmark
    </Tooltip>
  );

  return (
    <>
   <MainDiv className='pr-5' style={{paddingLeft: "80px"}}>
     
     <Logo>
     <FontAwesomeIcon icon={faMapPin} className='mr-2' style={{fontSize:'1.3em'}}/>
     <strong>Flipped Travel</strong>
     </Logo>
     <footer style={{color:'white'}}>A Dubhacks 2020 Project by Hao, Ryan, Chi, Shoaib, and Gary &lt;3 </footer>
    <OverlayTrigger placement="left" delay={{show: 250, hide: 400}} overlay={ExploreInfo}>
      <StyledButton variant="light" href="/explore" >
        Explore
      </StyledButton>
    </OverlayTrigger>
    <OverlayTrigger placement="left" delay={{show: 250, hide: 400}} overlay={SubmitInfo}>
      <StyledButton variant="warning" href="/submit">
        Submit
      </StyledButton>
    </OverlayTrigger>
      
     
    </MainDiv>

    
    </>
  )
}