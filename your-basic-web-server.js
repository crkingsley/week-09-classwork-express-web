/* 

   As we go along, we will try to apply similar code to build your own basic web server using this file.

   Follow instructions during class to first attempt to solve the coding challenge on your own.

    1) directly require and create an instance of express in this file
     
     Use port 1337 for this server instance
*/
   const express = require('express')
   const app = express()

   app.listen(3002, function() {
      console.log('App server started on port 3002 http://localhost:1337/')
   })

  /*  Use `listen` to start the server up to handle requests at this port number

     <https://expressjs.com/en/api.html#app.listen>

*/


/**
    2) Use the `get` method to configure a "home page" route handler
 */
// configure the home page routewith app.get - use: "/"
/* const router = express.Router()
app.use(router)

router.route('/testing').get(function (request, response) {
   response.status(200)
   response.send('HomePage')
}) */
//this is a lot like a 'switch' or an 'if'
// we configure express to call our function on a match
app.get('/', function (request, response) {
        response.send('HomePage')
})

 /**
    3) Use the `get` method to configure a "contact" route handler
 */
app.get('/contact', function (request, response){
      response.send('Contact')
})

 /**
    4) Use the `all` method to configure a default handler for when no other handlers defined earlier in this file have matched the path a user has requested

    For example: User requests localhost:1337/admin or localhost:1337/info

    Use `sendStatus` to 

    <https://expressjs.com/en/api.html#res.sendStatus>

 */
   app.all('*', function (request, response) {
      response.sendStatus(404)
   })