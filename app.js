/* global document */
import * as React from 'react'
import { render } from 'react-dom'
import Map, { Marker } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'
import MarkerView from './MarkerView'
import { useEffect, useState } from 'react'
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWljcm9zdHVjazIiLCJhIjoiY2xjNzc5ZnR5MWYxaTNucGc3dXI1ZW9jbSJ9.oA3eGIumdRb785WUNBlLpg' // Set your mapbox token here

function Root () {
  const [viewState, setViewState] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 6
  })

  const [long, setLong] = useState(-122.4)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setLong(getRandomFloat(-122.3, -122.6, 5))
  //   }, 1000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <div>
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={{ width: 800, height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
     <MarkerView
      long={-122.2}
      lat={37.8}
      color="#ff0000"
      zoom={viewState.zoom}
      />
      <MarkerView
      long={-122.4}
      lat={37.7}
      color="#00ff00"
      zoom={viewState.zoom}
      />
      <MarkerView
      long={-122.4}
      lat={37.8}
      color="#0000ff"
      zoom={viewState.zoom}
      />
    </Map>
    {/* <button type="button"
    onClick={increaseLong}>Increase</button> */}
    <div>Zoom : {viewState.zoom}</div>
    </div>
  )
}

render(<Root />, document.body.appendChild(document.createElement('div')))
