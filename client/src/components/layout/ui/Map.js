import * as React from "react";
import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import styled from 'styled-components';


const Pin = styled.div`
width: 50px;
  height: 50px;
  background: #C44;
  border-radius: 100px 100px 0px 100px;
  position: relative;
  margin: 15px;
  -webkit-transform: rotate(45deg);
  margin: 50px auto;
  &:after {
    content: "";
    position: absolute;
    top: -7px;
    left: -7px;
    bottom: -7px;
    right: -7px;
    border: 4px solid #C44;
    border-radius: inherit;
  }

`


export const Map = () => {
    const [viewport] = useState({
        latitude: 49.8880,
        longitude: -119.477829,
        zoom: 10,
        width: '100vw',
        height: '75vh'
    })

    const [marker] = useState({
        latitude: 49.974700,
        longitude: -119.41
    })

    const token = 'pk.eyJ1IjoiZW1waXJlbW90b3JzIiwiYSI6ImNrNGVudnB5NzBmbGgzZW82NWp1MXFhNTQifQ.j172aTGA8fvZ_pZqeonPcg'
    return (
        <div >
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={token}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <Marker
                    latitude={marker.latitude} longitude={marker.longitude} key={1}
                >
                    <Pin />
                </Marker>
            </ReactMapGL>
        </div>
    )
}

export default Map;