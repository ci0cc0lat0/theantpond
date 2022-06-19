import React from 'react'
import GalleryStyle from './galleryStyle.module.css'

const GalleryImage = ({name,tag}) => {
  console.log(`../images/${name}`)
  return (
    <>
        <div className={`${GalleryStyle['gallery-images']}`}>
        <a href={require(`../images/${name}`)} target="_blank" rel="noreferrer">
            <img loading="lazy" className={`${GalleryStyle['each-img']} ${GalleryStyle[tag]}`} src={require(`../images/${name}`)} alt=""/>
            
            </a>l
        </div>
    </>
  )
}

export default GalleryImage