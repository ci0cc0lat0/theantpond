import React from 'react'

const GalleryImage = ({name,tag}) => {
  console.log(`../images/${name}`)
  return (
    <>
        <div className='gallery-images'>
        <a href={require(`../images/${name}`)} target="_blank" rel="noreferrer">
            <img loading="lazy" className={`each-img ${tag}`} src={require(`../images/${name}`)} alt=""/>
            
            </a>
        </div>
    </>
  )
}

export default GalleryImage