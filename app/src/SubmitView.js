import React , {useState} from 'react';
import MapsComponent from './components/MapsComponent';
import SubmitForm from './components/SubmitForm'




export default()=>{
  const [coords, setCoords] = useState({lat:47.6205,lng:-122.3493});

  const updateCoords = (lat, lng) =>{
    setCoords({lat:lat, lng:lng})
  }



  return(
    <>
      <SubmitForm coords = {coords}/>
      <MapsComponent updateCoords={updateCoords} coords={coords} >
      

    </MapsComponent>
    </>


  )
}