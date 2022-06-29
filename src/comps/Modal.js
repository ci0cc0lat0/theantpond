import React from 'react'
import ReactDom from 'react-dom'
import closer from '../pages/styleList.module.css'
const modalStyle = {
    maxWidth:'40%',
    minWidth:'max(20%, 300px)',
    display: 'block',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#eaeaea',
    padding: '25px',
    zIndex: 100,
    textAlign: 'center'
}
const overlayStyle = {
    position: 'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor: 'rgb(0 ,0 ,0 ,0.5)',
    zIndex: 100
}

export default function Modal({ open,children,onClose }) {
    if (!open) return null;
    function htmlConvert(){
        return{__html:children}
    }
  return ReactDom.createPortal(
    <>  
        <div onClick={onClose} style={overlayStyle}>
        <div 
         onClick={e => {
            // do not close modal if anything inside modal content is clicked
            e.stopPropagation();
          }}
         style={modalStyle}>
            <p dangerouslySetInnerHTML={htmlConvert()}></p>
            <span className={`${closer['close']}`} onClick={onClose}>&times;</span>
        </div>
        </div>
    </>,
    document.getElementById('portal')
  )
}
