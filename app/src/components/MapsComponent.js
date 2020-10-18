import React,{useState} from 'react';
import {GoogleMap, useJsApiLoader, Marker, HeatmapLayer } from '@react-google-maps/api';


const mapsStyle ={
  width:"100%",
  height:'calc(100vh - 60px)',

}

export default (props) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAFySSUITqXTjbzR4CaHBMnMeYaaFfYbEQ"
  })


  

  const renderMap = () => {
    
    
  
    return (
      <>
     
      
    <GoogleMap
    mapContainerStyle={mapsStyle}
    center={{lat:	47.6456,lng:-122.3344}}
    zoom={5}
    onClick = { e => {props.updateCoords(e.latLng.lat(),e.latLng.lng())} }
    mapTypeControl ='false'
    
  >
    {props.children}
    <Marker position={props.coords}></Marker>
    
   </GoogleMap>
   </>
    )
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <p>404</p>

}




 

 