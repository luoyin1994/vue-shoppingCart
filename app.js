var express = require('express')
var path    = require('path')

var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')

app.use(express.static(path.join(__dirname, 'public')))

var port = process.env.PORT || 8080
app.listen(port)
console.log('start on http://localhost:' + port + '/')

//reader page
app.get('/', function (req, res) {
    res.render('shoppingCart')
})
//address page
app.get('/address', function (req, res) {
    res.render('address')
})