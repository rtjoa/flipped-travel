import React from 'react'
import {Button, Tooltip, OverlayTrigger} from 'react-bootstrap'
import Paragraph from '../components/Paragraph.js'
import Buttons from '../components/Buttons.js'

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
    <style type="text/css"> {`
      body{
        background: #203025;
      }
      .btn-space{
        margin: 10vw;
        font-size: 5vw;
      }
      `} </style>

    <Paragraph>thingy
    <Buttons>
    <OverlayTrigger placement="bottom" delay={{show: 250, hide: 400}} overlay={ExploreInfo}>
      <Button variant="outline-warning" href="/explore" size="space">
        Explore</Button></OverlayTrigger>
        <OverlayTrigger placement="bottom" delay={{show: 250, hide: 400}} overlay={SubmitInfo}>
      <Button variant="outline-secondary" href="/submit" size="space">
        Submit</Button></OverlayTrigger>
    </Buttons>
    </Paragraph>
    </>
  )
}