import React,{useState} from 'react';
import {GoogleMap, useJsApiLoader, Marker, HeatmapLayer } from '@react-google-maps/api';


const pois = 
    [{
        "name": "Space Needle",
        "type": "image",
        "lat": 47.6205,
        "lng": 122.3493,
        "data": "https://bloximages.newyork1.vip.townnews.com/yakimaherald.com/content/tncms/assets/v3/editorial/c/18/c18c7926-1049-11e9-9dd5-e7559721663f/5c2f9dc9b6c37.image.jpg?crop=1661%2C1246%2C0%2C0&resize=1661%2C1246&order=crop%2Cresize"
    },
    {
        "name": "Space needle",
        "type": "text",
        "lat": 47.6305,
        "lng": 122.3373,
        "data": "It takes 43 seconds to travel in a Space Needle elevator from the ground to the tower’s top level"
    }];



const mapsStyle ={
  width:"100vw",
  height:"90vh"
}

export default () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAFySSUITqXTjbzR4CaHBMnMeYaaFfYbEQ"
  })

  const [lastCoords, setLastCoords] = useState({lat:47.6013,lng:-122.3378});
  

  const renderMap = () => {
    let heatMapData = pois.map(
      poi => {
        return new window.google.maps.LatLng(37.782, -122.447)
        
      }
    )
    console.log(heatMapData);
  
    return (
      <>
      <p>last: lat: {lastCoords.lat} lng: {lastCoords.lng}</p>
    <GoogleMap
    mapContainerStyle={mapsStyle}
    center={lastCoords}
    zoom={5}
    onClick = { e => {setLastCoords({lat: e.latLng.lat(),lng: e.latLng.lng()})} }
    
  >
   
    <Marker position={lastCoords}></Marker>
    
   </GoogleMap>
   </>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <p>404</p>

}




 

 