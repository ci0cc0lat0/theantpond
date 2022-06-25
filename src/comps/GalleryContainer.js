import React from 'react'
import GalleryImage from './GalleryImage'
import GalleryStyle from './galleryStyle.module.css'

const GalleryContainer = ({ myID, myClass }) => {
  return (
    <div id={myID} className={`${GalleryStyle[myClass]}`}>
        <GalleryImage name="angst.png" tag=""/>
        <GalleryImage name="Classic Cutie.png" tag=""/>
        <GalleryImage name="SomePractice.png" tag=""/>
        <GalleryImage name="MoreMyTake.png" tag=""/>
        <GalleryImage name="ThisIsntAboutYou.png" tag=""/>
        <GalleryImage name="baddays.png" tag=""/>
        <GalleryImage name="FuckIfIKnow.png" tag=""/>
        <GalleryImage name="CebCock.png" tag="nsfw"/>
        
        <GalleryImage name="How i hold my joystick.png" tag="nsfw"/>
        <GalleryImage name="Pasted image 20211118231633.png" tag=""/>
        <GalleryImage name="Pasted image 20211118231830.png" tag=""/>
        <GalleryImage name="Pasted image 20211118231914.png" tag=""/>
        <GalleryImage name="Right My Wrongs.png" tag=""/>
        <GalleryImage name="Scene.png" tag=""/>
        <GalleryImage name="SpaceCowBoy.png" tag="nsfw"/>
        <GalleryImage name="ash.png" tag=""/>
        <GalleryImage name="beachnobody.png" tag=""/>
        <GalleryImage name="maggie.png" tag=""/>
        <GalleryImage name="midrift.png" tag=""/>
        <GalleryImage name="no3.jpg" tag=""/>
        <GalleryImage name="pepe.png" tag=""/>
        <GalleryImage name="pl.jpg" tag=""/>
        <GalleryImage name="someboxes.png" tag=""/>
        <GalleryImage name="waiting.png" tag=""/>
        <GalleryImage name="why.png" tag=""/>
        

    </div>
  )
}

export default GalleryContainer