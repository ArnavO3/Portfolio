import { useEffect, useState } from 'react'
import {
  faNode,
  faGit,
  faFigma,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious web developer and still looking to learn new
            things so that I get the opportunity to work with the latest
            technologies on challenging and diverse projects.
            I'm quiet optimistic, naturally curious, and perpetually working on
            improving my skills.
          </p>
          <p>
            I really like watching football and my portfolio would not be
            complete if I didn't mention my favourite club Real Madrid CF. A few
            of my hobbies also include watching cricket and F1 too. Apart from
            that, I also like to learn new things, just like I was eager to
            learn about React JS, I have also continued that spirit and made myself familiar
            with Next JS. Apart from development, I am also proficient in Data Structures and
            Algorithms.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#ca464a" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGit} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNode} color="#47008e" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faFigma} color="#ff1d83" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
  )
}

export default About
