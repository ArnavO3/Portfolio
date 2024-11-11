import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import './contact.scss'
import Layout from '../Layout/layout'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <Layout />
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in any opportunity from which I can learn more,
            especially on ambitious or large projects. However, if you have any
            other requests or questions, don't hesitate to contact me! :)
          </p>
          <div className="contact-form"></div>
        </div>
        <div className="info-map">
          Arnav Tiwari,
          <br />
          Sector 77,
          <br />
          Noida, Uttar Pradesh <br />
          India
          <br />
          <br />
          <span>arnavtiwari2003@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[28.57227, 77.378982]} zoom={14}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.57227, 77.378982]}>
              <Popup>Hi! 😉</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
  )
}

export default Contact
