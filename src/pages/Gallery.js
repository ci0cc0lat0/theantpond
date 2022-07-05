import React from 'react'
import { Link } from 'react-router-dom'
import GalleryContainer from '../comps/GalleryContainer'
import Header from '../comps/Header'


const gallery = (props) => {
  return (
    <>
    <div className="title-flip">
        <Link to="/"><Header heading="Gallery" testValue="Gallery"/></Link>
        <hr></hr>
        <p id='gallery-about'>This is a collection of my works I'd like to showcase.<br></br>Some finished, some unfinished.<br></br> View at your own risk</p>
    </div>
    <GalleryContainer myID="hello" myClass="gallery-container"/> 
    </>
  )
}

export default gallery