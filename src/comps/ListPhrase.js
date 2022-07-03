import React from 'react'
const ListPhrase = ({childToParent,onClick,phrase, message}) => {
  const data = message
    if(message.length === 0 ){
        return (
            <h3 className='my-list'>{phrase}</h3>
        )
    } else{
  return (
    <>
        <h3 onClickCapture={()=> childToParent(data)} onClick={onClick} className='my-list hover-effect'>{phrase}</h3>
    </>
  )
}
}

export default ListPhrase