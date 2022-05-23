import React from 'react'

export default function List(props) {
  
 

  return (
    <div style={listdiv}>
    <li style={{ marginRight: "44px" }}>{props.text}</li>
    <button
    onClick={()=>{props.onSelect(props.id)}}
      style={{
        background: "none",
        border: "none",
        color: "blanchedalmond",
        cursor:"pointer"
      }}
    >
      <span>&#9986;</span>
    </button>
  </div>
  )
}
const listdiv={
  display:"flex",
  justifycontent:"space-around"
} 