import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import './portfolio.scss'
import Layout from '../Layout/layout'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <Layout />
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'My Projects'.split('')}
            idx={15}
          />
        </h1>
        <div className="projects">
          {/* <div className="weather-app">
            <h2 className="weather-heading">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'React Weather App'.split('')}
                idx={15}
              />
            </h2>
          </div>
          <div className="blogs">
            <h2 className="blogs-heading">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'Online Blog App'.split('')}
                idx={15}
              />
            </h2>
          </div>
          <div className="f1">
            <h2 className="f1-heading">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'F1 Fan-page'.split('')}   //on hover: diagonal pixel animation then github link 
                idx={15}
              />
            </h2>
          </div> */}
          <main className="page-content">
            <div className="react-weather card">
              <div className="content-weather content">
                <h2 className="title-weather title">REACT WEATHER APP</h2>
                <p className="content-weather copy">
                  A simple weather app made using React JS that acts as any
                  other weather application.
                </p>
                <a
                  className="button btn"
                  href="https://github.com/ArnavO3/Weather-App-using-React"
                >
                  View Github Repo
                </a>
              </div>
            </div>
            <div className="blog card">
              <div className="content blog">
                <h2 className="title blog">BLOG USING NODE/EXPRESS JS</h2>
                <p className="copy content-blog">
                  A clone to any online blog platforms which is made using Node
                  and Express JS.
                </p>
                <a
                  className="button btn"
                  href="https://github.com/ArnavO3/Blogs"
                >
                  View Github Repo
                </a>
              </div>
            </div>
            <div className="f1 card">
              <div className="f1-content content">
                <h2 className="f1-title title">F1 FANPAGE</h2>
                <p className="content-f1 copy">
                  A basic website made by Vanilla JS and Bootstrap that reflects
                  my interest in F1.
                </p>
                <a className="button btn" href="https://github.com/ArnavO3/F1">
                  View Github Repo
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default Portfolio
