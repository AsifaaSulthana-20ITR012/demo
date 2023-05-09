import React from 'react'
import { useLocation } from 'react-router-dom';
export default function Disp() {
    const { state } = useLocation();
    console.log(state); 
    // const {desc,title}=(props.location && props.location.state) || {};
  return (
    <div>
       

       <div>{state.title}</div> desc:{state.desc}

    </div>
  )
}
