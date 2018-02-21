const express = require('express')
const app = express()
// respond with Hello World! on the homepage
app.get('/', (req, res) => res.send('Hello World!'))

//Respond to POST request on the root route (/), the application’s home page:
app.post('/', function (req, res) {
    res.send('Got a Post request')
})

//Respond to a PUT request to the /user route:
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

//Respond to a DELETE request to the /user route:
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))