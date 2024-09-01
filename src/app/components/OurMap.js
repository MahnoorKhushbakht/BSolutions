'use client'
import React, { useState } from "react"
import { Map, Marker, ZoomControl } from "pigeon-maps"

export default function MyMap() {
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}, 39%, 70%)`

  return (
    <Map data-aos='fade' height={300} defaultCenter={[40.719074,-74.050552]} defaultZoom={12}>
      <ZoomControl />
      <Marker 
        width={50}
        anchor={[40.719074,-74.050552]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      />
    </Map>
  )
}
