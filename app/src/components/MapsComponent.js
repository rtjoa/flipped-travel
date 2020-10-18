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
    let poiMarkers=<></>;
    
    if(props.pois){
      let heatMapData = props.pois.map(
        poi => {
          return new window.google.maps.LatLng(37.782, -122.447)
          
        }
      )

      console.log(heatMapData);
      poiMarkers = props.pois.map(poi =>{
       return <Marker position = {poi.lat,poi.lng}/>
      })
    }
    
  
    return (
      <>
     
      
    <GoogleMap
    mapContainerStyle={mapsStyle}
    center={props.coords}
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




 

 