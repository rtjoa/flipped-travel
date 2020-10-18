import React, {useState, useEffect} from 'react';
import {GoogleMap, useJsApiLoader, Marker, HeatmapLayer } from '@react-google-maps/api';
import  {Card, Button} from 'react-bootstrap';
import styled from 'styled-components';
import Header from '../components/Header.js'

const POICard = styled(Card)`
&{
  position:absolute;
  font-size:1.2rem;
  height:calc(100vh - 60px - 12em);
  width: 25vw;
  overflow-y:hidden;
  z-index:999;
  border-radius: 10px;
  margin:6em 0.69em;
}

`

const mapsStyle ={
  width:"100%",
  height:'calc(100vh - 60px)',
  
  
}




export default (props) => {
  let temp;
  const [pois, setPOIs] = useState([]);
  const [lastCoords, setLastCoords] = useState({lat:47.6305, lng:-122.3373})
  const [lastPOI, setLastPOI] = useState({});
  useEffect(()=>fetchPOI(),[]);

  const  fetchPOI = async () =>  {
    await fetch("/notes")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("fetched!");
          setPOIs(result);
        },
        (error) => {
          console.log(error)
        }
      )
  }

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAFySSUITqXTjbzR4CaHBMnMeYaaFfYbEQ",
    libraries: ["visualization"]
  })

  const renderPOI = () => {
    
    let POIImage = <></>;
    let POIData =<></>;
    if(lastPOI.type =="image"){
      POIImage= <Card.Img variant="top" src={lastPOI.data}/>
    }else if (lastPOI.type =="text"){
      POIData=<p>{lastPOI.data}</p>
    }

    
    if(lastPOI.title){
      
    return (
      <POICard className='shadow-lg'>
        {POIImage}
        <Card.Body>
        <Card.Title  style={{fontWeight:'bold'}}>
          {lastPOI.title}
        </Card.Title>
        <hr/>
        {POIData}
        
        </Card.Body>
        <a href=" mailto:debug@email.com?subject=Hey!%20There's%20an%20issue%20with%20this%20location&body=The%20Issue%3A%0D%0APOI%20ID%3A "/>
        <Card.Footer className='d-flex flex-row justify-content-between'>
          <em>{lastPOI.lat.toFixed(4)}, {lastPOI.lng.toFixed(4)}</em>
          <Button 
            variant ="danger"
            href={`mailto:support@dev.com?subject=%5BReport%5D%20I%20found%20an%20issue%20with%20a%20marker%3A%20${lastPOI._id}&body=Issue%3A%0D%0A%0D%0A%0D%0A%3D%3D%3D%3D%3D%3D%0D%0AID%3A%20${lastPOI._id}%0D%0AName%3A%20${lastPOI.title}%0D%0A`}
          >
            Report Issue
          </Button>
        </Card.Footer>
      </POICard>
    )
    }else{
      return <></>
    }


  }

  const renderHeatMap = () =>{
   
    return (
    <HeatmapLayer 
    data= {pois.map(poi=> new window.google.maps.LatLng(poi.lat, poi.lng))} 
    options={{
      radius:30,
      dissipating: true,
      opacity:0.5
    }}/>
    )
  }
  
  const renderMap = () => {
    
    return (
      <div style={{overflow:'hidden'}}>
      <Header msg={`Current (${lastCoords.lat.toFixed(4)} , ${lastCoords.lng.toFixed(4)} ) Markers:${pois.length}`}/>
      {renderPOI()}
      
    <GoogleMap
    mapContainerStyle={mapsStyle}
    center={lastCoords}
    zoom={12}
    onClick = { e => {setLastCoords({lat:e.latLng.lat(),lng:e.latLng.lng()}) } }
    
  >
    {renderHeatMap()}
    {pois.map((poi,i) =>{
        return (
        <Marker 
        position = {{lat:poi.lat,lng:poi.lng}||{lat:0,lng:0}} 
        onClick={e=>{
          setLastPOI(poi)
          setLastCoords({lat:e.latLng.lat(),lng:e.latLng.lng()})
        }}
        key={i}
        /> )
      }
    )
    }
    
    
   </GoogleMap>
   </div>

    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <p>404</p>

}




 
