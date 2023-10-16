import React from 'react'
import About from './PageContent/About'
import Contact from './PageContent/Contact'
import Project from './PageContent/Project'
import ImageOfLocation from './PageContent/ImageOfLocation'

const PageContent = () => {
  return (
    <>
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
            <About/>
            <Contact/>
            <Project/>
            <ImageOfLocation/>
        </div>
    </>
  )
}

export default PageContent