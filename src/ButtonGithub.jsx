import React from 'react'

export default function ButtonGithub({svg,link}) {
  return (
    <div>
      <a href={link}>
        <button class="Btn">
    <span class="svgContainer">
      {svg}
    </span>
    <span class="BG"></span>
   </button>
   </a>
   </div>
  )
}
