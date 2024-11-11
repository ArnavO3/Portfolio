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
          <main className="page-content">
            <div className="react-weather card">
              <div className="content-weather content">
                <h2 className="title-weather title">STUDYMATE</h2>
                <p className="content-weather copy">
                  A website app made using Next JS and Tailwind CSS that allows people to add
                  their courses and others can learn from them and track their progress very easily.
                </p>
                <a
                  className="button btn"
                  href="https://github.com/ArnavO3/studymate"
                  target={'blank'}
                >
                  View Github Repo
                </a>
              </div>
            </div>
            <div className="blog card">
              <div className="content blog-content">
                <h2 className="title blog-title">BLOG USING NODE/EXPRESS JS</h2>
                <p className="copy content-blog">
                  A clone to any online blog platforms which is made using Node
                  and Express JS.
                </p>
                <a
                  className="button btn"
                  href="https://github.com/ArnavO3/Blogs"
                  target={'blank'}
                >
                  View Github Repo
                </a>
              </div>
            </div>
            <div className="f1 card">
              <div className="f1-content content">
                <h2 className="f1-title title">ENLIVEN</h2>
                <p className="content-f1 copy">
                  An awareness generator website that helps the victims of domestic violence
                  and abuse. It is made using React JS and Tailwind CSS.
                </p>
                <a
                  className="button btn"
                  target={'blank'}
                  href="https://github.com/ArnavO3/EnLiven"
                >
                  View Github Repo
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Loader type="ball-spin-fade-loader" />
    </>
  )
}

export default Portfolio
