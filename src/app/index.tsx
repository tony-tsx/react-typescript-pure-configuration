import React from 'react'
import ReactDOM from 'react-dom/server'

import bodyParser from 'body-parser'
import cors from 'cors'
import Express from 'express'
import path from 'path'

import AppReact from './React'

const app = Express()

app.use( bodyParser.json( {} ) )
app.use( cors() )

app.use( '/static', Express.static( path.resolve( 'dist' ) ) )

app.get( '*', ( req, res ) => {
  const reactContent = ReactDOM.renderToString( <AppReact /> )
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <div id="root">
          ${reactContent}
        </div>
        <script src="/static/main.js"></script>
      </body>
    </html>
  `
  res.send( html )
} )

export default app
