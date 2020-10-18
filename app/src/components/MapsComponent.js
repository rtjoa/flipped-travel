import React,{useState,useRef} from 'react';
import {GoogleMap, useJsApiLoader, Marker, HeatmapLayer } from '@react-google-maps/api';


const mapsStyle ={
  width:"100%",
  height:'calc(100vh - 60px)',

}


export default (props) => {
  const [center,setCenter] = useState(props.coords)
  const refContainer = useRef(null);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAFySSUITqXTjbzR4CaHBMnMeYaaFfYbEQ"
  })

 
  

  const renderMap = () => {
 
    
  
    return (
      <>
     
      
    <GoogleMap
    ref={refContainer}
    mapContainerStyle={mapsStyle}
    center={center}
    zoom={5}
    onClick = { e => {
      props.setCoords({lat:e.latLng.lat(),lng:e.latLng.lng()})
     setCenter(refContainer.current.props.center)
    } }
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




 

 