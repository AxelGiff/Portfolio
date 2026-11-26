import React from 'react'

export default function ButtonGithub({svg,link}) {
  return (
    <div>
      <a href={link}>
        <button className="Btn">
    <span className="svgContainer">
      {svg}
    </span>
    <span className="BG"></span>
   </button>
   </a>
   </div>
  )
}
