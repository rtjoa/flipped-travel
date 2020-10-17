import React from 'react';
import styled from 'styled-components';


const HeaderDiv = styled.div`
&{
  float:top;
  width:100vw;
  height:50px;
  background-color:black;
  padding:0;
  margin:0;
}
`
export default () => (
  <HeaderDiv>
    Explore the outside, from the inside.
  </HeaderDiv>
);