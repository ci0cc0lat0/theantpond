import React from 'react'


const header = ({ heading, testValue, }) => {
  return (
    <>
      <h1 className="links" test-value={testValue}> {heading}</h1>
    </>
  )
}

export default header 