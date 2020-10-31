import React, { useEffect, useState } from 'react'

const AppReact = () => {
  const [ text, setText ] = useState( 'Hello World!' )
  useEffect( () => {
    setText( 'Text before component mount' )
  }, [] )

  return (
    <h1>{text}</h1>
  )
}

namespace AppReact {
  export interface Props {}
}

export default AppReact
