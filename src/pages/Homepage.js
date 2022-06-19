import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../comps/Header'
const Homepage = () => {
  return (
    <div className="title-flip">
      <a href="https://twitter.com/MemesBeDanko">
      <Header heading="The" testValue="The"/>
      <Header heading="Ant" testValue="Ant"/>
      <Header heading="Pond" testValue="Pond"/>
      </a>
      <hr></hr>
      <Link to="/gallery">
        <Header heading="Gallery" testValue='Gallery'/>
      </Link>
      <Link to="/list">
        <Header heading="List" testValue='List'/>
      </Link>
      <Header heading="Records" testValue='Records'/>
      <Header heading="Post" testValue='Post'/>
    </div>
  )
}

export default Homepage