import React from 'react'

function Test() {
  return (
    <div>
      <p>hello {process.env.REACT_APP_ABC}</p>
    </div>
  )
}

export default Test
