import React, {useState} from 'react';
import {GoogleMap, useJsApiLoader, Marker, HeatmapLayer } from '@react-google-maps/api';
import  {Card} from 'react-bootstrap';
import styled from 'styled-components';
const pois = 
[{
    "name": "Space Needle",
    "type": "image",
    "lat": 47.6205,
    "lng": -122.3493,
    "data": "https://bloximages.newyork1.vip.townnews.com/yakimaherald.com/content/tncms/assets/v3/editorial/c/18/c18c7926-1049-11e9-9dd5-e7559721663f/5c2f9dc9b6c37.image.jpg?crop=1661%2C1246%2C0%2C0&resize=1661%2C1246&order=crop%2Cresize"
},
{
    "name": "Ground needle",
    "type": "text",
    "lat": 47.6305,
    "lng": -122.3373,
    "data": "It takes 43 seconds to travel in a Space Needle elevator from the ground to the tower’s top level"
}];


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
  const [lastCoords, setLastCoords] = useState({lat:47.6305, lng:-122.3373})
  const [lastPOI, setLastPOI] = useState({});
  const POIBox =<>heloo</>;
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAFySSUITqXTjbzR4CaHBMnMeYaaFfYbEQ"
  })

  const renderPOI = () => {
    console.log("render called!")
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
    let poiMarkers=<></>;
    
    if(pois){
      let heatMapData = pois.map(
        poi => {
          return new window.google.maps.LatLng(37.782, -122.447)
          
        }
      )

      console.log(heatMapData);
      poiMarkers = pois.map(poi =>{
        return <Marker position = {{lat:poi.lat,lng:poi.lng}} onClick={()=>setLastPOI(poi)} key={poi.name +poi.lat}/> 
      }

      )
    }
    
  
    return (
      <>
      <p>last: lat: {lastCoords.lat} lng: {lastCoords.lng}</p>
      {renderPOI()}
    <GoogleMap
    mapContainerStyle={mapsStyle}
    center={lastCoords}
    zoom={5}
    onClick = { e => {setLastCoords({lat:e.latLng.lat(),lng:e.latLng.lng()}) } }
    
  >
    
    {poiMarkers}
    
    
   </GoogleMap>
   </>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <p>404</p>

}




 
