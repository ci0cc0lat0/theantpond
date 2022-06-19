import React from 'react'
import ListStyle from '../pages/styleList.module.css'
const ListPhrase = ({phrase, message}) => {
    if(message.length === 0 ){
        return (
            <h3 className={`${ListStyle['my-list']}`}>{phrase}</h3>
        )
    } else{
  return (
    <>
        <h3 className={`${ListStyle['my-list']} ${ListStyle['hover-effect']}`}>{phrase}</h3>
    </>
  )
}
}

export default ListPhrase