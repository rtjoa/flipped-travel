import React from 'react'
import {Button, Tooltip, OverlayTrigger} from 'react-bootstrap'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapPin} from '@fortawesome/free-solid-svg-icons'
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
   <div>
     <FontAwesomeIcon icon={faMapPin} className='mr-2' style={{fontSize:'1.3em'}}/>
     Flipped Travel
    </div>

    <OverlayTrigger placement="bottom" delay={{show: 250, hide: 400}} overlay={ExploreInfo}>
      <Button variant="outline-warning" href="/explore" size="space">
        Explore</Button></OverlayTrigger>
        <OverlayTrigger placement="bottom" delay={{show: 250, hide: 400}} overlay={SubmitInfo}>
      <Button variant="outline-secondary" href="/submit" size="space">
        Submit</Button></OverlayTrigger>

    
    </>
  )
}