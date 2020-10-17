import React from 'react';
import MapsComponent from './components/MapsComponent';
const pois = 
[{
    "name": "Space Needle",
    "type": "image",
    "lat": 47.6205,
    "lng": -122.3493,
    "data": "https://bloximages.newyork1.vip.townnews.com/yakimaherald.com/content/tncms/assets/v3/editorial/c/18/c18c7926-1049-11e9-9dd5-e7559721663f/5c2f9dc9b6c37.image.jpg?crop=1661%2C1246%2C0%2C0&resize=1661%2C1246&order=crop%2Cresize"
},
{
    "name": "Space needle",
    "type": "text",
    "lat": 47.6305,
    "lng": -122.3373,
    "data": "It takes 43 seconds to travel in a Space Needle elevator from the ground to the tower’s top level"
}];


export default () => {

return(
  <>
  <MapsComponent pois = {pois} coords={{lat:47.6205,lng:-122.3493}}/>

  </>




) 

}