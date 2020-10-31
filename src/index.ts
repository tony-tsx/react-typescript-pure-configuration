import app from './app'

app.listen( 8081, () => {
  console.log( `server start at ${new Date().toLocaleString()} http://localhost:8080` )
} )
