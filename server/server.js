// Require in express
const express = require( 'express' );

// Create our express app
const app = express();

// Change express' default directory to the public folder in the server folder
app.use( express.static( 'server/public' ) );

// 
const port = 5000;
app.listen( port, () => console.log( `Listening on port ${port}` ) );

app.get( '/quote', ( req, res ) => {
    console.log('Handling the GET request for /quote');

    // Sends back data that you might put on the DOM with jQuery
    res.send( 'Just be yourself!' );

    // ERROR: 404 (and for other various alerts)
    // res.sendStatus(404);   
});