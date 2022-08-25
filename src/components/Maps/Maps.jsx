import { useEffect, useState } from "react";
import { Map, Marker } from "pigeon-maps"

import MapsItems from '../MapsItems/MapsItems';


const Maps = () => {
  const [center, setCenter] = useState([-28, 23])
  const [zoom, setZoom] = useState(6)
  const [width, setWidth] = useState(window.innerWidth)

  const [markerJohannesburg, setMarkerJohannesburg] = useState([-26, 25])
  const [markerDurban, setMarkerDurban] = useState([-30, 28])
  const [markerMthatha, setMarkerMthatha] = useState([-31, 26])

  useEffect (() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })
    if (width < 768) {
      setCenter([-28, 26])
      setZoom(6)
      setMarkerJohannesburg([-25, 28])
      setMarkerDurban([-29, 31])
      setMarkerMthatha([-30, 29])
    } if (767 < width < 992) {
      setCenter([-28, 29])
      setZoom(6)
      setMarkerJohannesburg([-26, 29])
      setMarkerDurban([-29, 31])
      setMarkerMthatha([-31, 29])
    } if (width > 992) {
      setCenter([-28, 23])
      setZoom(6)
      setMarkerJohannesburg([-26, 25])
      setMarkerDurban([-30, 28])
      setMarkerMthatha([-31, 26])
    }
  }, [width])

    return (
      <section className='maps'>
      <div className="maps-content">
        <div className="maps-items">
          <h2>Our agencies in South Africa</h2>
          <p>Contact : Jacobus Van Niekerk</p>
          <p>Telephone: <a href="tel:+27 67 674 0573">+27 67 674 0573</a></p>
        </div>
        <MapsItems city={'Johannesburg'} address={'99 Skew Road, 1459, Boksburg, Gauteng'} onClick={() => {setCenter(markerJohannesburg); setZoom(7)}}/>
        <MapsItems city={'Durban'} address={'Unit 4b, 50 Moreland Drive, Rinaldo Industrial Park, Redhill 4071, Durban, KZN'} onClick={() => {setCenter(markerDurban); setZoom(7) }}/>
        <MapsItems city={'Mthatha'} address={'Nelson Mandela Dr, Umtata Part 1, Mthatha, 5099, South Africa'} onClick={() => {setCenter(markerMthatha); setZoom(7) }}/>
      </div>
      <div className="google-map">
        <Map
          center={center}
          zoom={zoom}>
          <Marker width={50} anchor={[-26.194528716826486, 28.279952246587186]} />
          <Marker width={50} anchor={[-29.76139202168062, 31.0269298112885]} />
          <Marker width={50} anchor={[-31.602073815004985, 28.75005073258005]} />
        </Map>
      </div>
    </section>
    );
}
export default Maps;