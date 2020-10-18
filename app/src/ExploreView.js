import React, {useState} from 'react';
import {GoogleMap, useJsApiLoader, Marker, HeatmapLayer } from '@react-google-maps/api';
import  {Card, Button} from 'react-bootstrap';
import styled from 'styled-components';


const POICard = styled(Card)`
&{
  position:fixed;
  height:100vh;
  width: 30vw;
  z-index:999;
}

`

const mapsStyle ={
  width:"100vw",
  height:"90vh"
}

export default (props) => {
  let temp;
  const [pois, setPOIs] = useState([]);
  const [lastCoords, setLastCoords] = useState({lat:47.6305, lng:-122.3373})
  const [lastPOI, setLastPOI] = useState({});

 const fetchPOI = () =>{
    fetch("/notes")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("fetched!");
          console.log(result);
        },
        (error) => {
          console.log(error)
        }
      )
  }

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAFySSUITqXTjbzR4CaHBMnMeYaaFfYbEQ"
  })

  const renderPOI = () => {
    
    let POIData =<></>;
    if(lastPOI.type =="image"){
      POIData= <img src={lastPOI.data} width='100%' />
    }else if (lastPOI.type =="text"){
      POIData=<p>{lastPOI.data}</p>
    }
    return (
      <POICard>
        
        <Card.Title>
          {lastPOI.name}
        </Card.Title>
        <hr/>
        {POIData}
      </POICard>
    )


  }

  
  const renderMap = () => {
  
    
  
    
  
    return (
      <>
      <Button onClick={()=>fetchPOI()}>Fetch</Button>
      <p>last: lat: {lastCoords.lat} lng: {lastCoords.lng} pois:{pois.toString()}</p>
      {renderPOI()}
    <GoogleMap
    mapContainerStyle={mapsStyle}
    center={lastCoords}
    zoom={5}
    onClick = { e => {setLastCoords({lat:e.latLng.lat(),lng:e.latLng.lng()}) } }
    
  >
    
    {/* {pois.map(poi =>{
        return <Marker position = {{lat:poi.lat,lng:poi.lng}} onClick={()=>setLastPOI(poi)} key={poi.name +poi.lat}/> 
      }
    )
    } */}
    
    
   </GoogleMap>
   </>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <p>404</p>

}




 
