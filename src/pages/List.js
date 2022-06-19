import React from 'react'
import Header from '../comps/Header'
import { Link } from 'react-router-dom'
import ListStyle from './styleList.module.css'
import ListPhrase from '../comps/ListPhrase'
import {phrases} from '../contentlist/phrase'
const List = () => {
  return (
    <>
      <div className={`${ListStyle['title-flip']}`}>
      <Link to="/"><Header heading="List" testValue="List" /></Link>
      <hr></hr>
      <p id={ListStyle.listAbout}>More than a <strike>simple list</strike><br></br>Oldest at the bottom<br></br>* Marks a message</p>
      </div>
      <div >
        {phrases.map(phrase=>{
          return <ListPhrase phrase={phrase.name} message={phrase.caption}/>
        })}




      </div>
    </>
  )
}

export default List