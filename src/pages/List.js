import React,{useState} from 'react'
import Header from '../comps/Header'
import { Link } from 'react-router-dom'
import ListPhrase from '../comps/ListPhrase'
import {phrases} from '../contentlist/phrase'
import Modal from '../comps/Modal'
const List = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState('');
  const childToParent = (childData) => {
    setData(childData)
  }

  return (
    <>
      <div className='title-flip'>
        <Link to="/"><Header heading="List" testValue="List" /></Link>
        <hr></hr>
        <p id='listAbout'>More than a <strike>simple list</strike><br></br>Oldest at the bottom<br></br>* Marks a message</p>
      </div>

      

      <div >
        {phrases.map(phrase=>{
          return <ListPhrase childToParent={childToParent} onClick={()=>setIsOpen(true)} phrase={phrase.name} message={phrase.caption}/>
        })}
      </div>

      <Modal open={isOpen} onClose={()=> setIsOpen(false)}>
        {data}
      </Modal>
    </>
  )
}

export default List