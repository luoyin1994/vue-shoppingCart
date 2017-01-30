var express = require('express')
var path = require('path')

var app = express()

app.set('views', './views/pages')
app.set('views engine', 'jade')

app.use(express.static(path.join(__dirname, 'public')))

var port = process.env.PORT || 3000
app.listen(port)
console.log('start on http://localhost:' + port+'/')

//reader page
app.get('/', function (req, res) {
    res.render('index')
})