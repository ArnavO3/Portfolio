import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faNode,
  faGitSquare,
  faFigma,
  faJsSquare,
  faReact,
  faHtml5
} from '@fortawesome/free-brands-svg-icons'

import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import './about.scss'
import Layout from '../Layout/layout'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <Layout />
      <div className="container about-page">
        <div className="text-zone-about">
          <h1 className="about-heading">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p align="LEFT">
            I'm a very ambitious web developer and still looking to learn new
            things so that I get the opportunity to work with the latest
            technologies on challenging and diverse projects.
            I'm quiet optimistic, naturally curious, and perpetually working on
            improving my skills.
          </p>
          <p align="LEFT">
            I really like watching football and my portfolio would not be
            complete if I didn't mention my favourite club Real Madrid. A few
            of my hobbies also include watching cricket and F1 too. Apart from
            that, I also like to learn new things, just like I was eager to
            learn about React JS, with the same hunger I have made a few projects on Next JS also.
            Apart from the development aspect of my skills, I am also proficient in Data Structures and
            Algorithms.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1 about-cube">
              <FontAwesomeIcon
                icon={faReact}
                className="about-cube"
                color="#5ED4F4"
              />
            </div>
            <div className="face2 about-cube">
              <FontAwesomeIcon
                icon={faHtml5}
                className="about-cube"
                color="#fd595e"
              />
            </div>
            <div className="face3 about-cube">
              <FontAwesomeIcon
                icon={faGitSquare}
                className="about-cube"
                color="#a25ccc"
              />
            </div>
            <div className="face4 about-cube">
              <FontAwesomeIcon
                icon={faNode}
                className="about-cube"
                color="#3bbc8b"
              />
            </div>
            <div className="face5 about-cube">
              <FontAwesomeIcon
                icon={faJsSquare}
                className="about-cube"
                color="#e2cb1a"
              />
            </div>
            <div className="face6 about-cube">
              <FontAwesomeIcon
                icon={faFigma}
                className="about-cube"
                color="#000"
              />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  )
}

export default About
