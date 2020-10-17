const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express()

const port = process.env.PORT || 3000

app.use('/static', express.static(path.join(__dirname + '/public')))

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('home',{
    css: "/static/css/home.css",
    csss: "/static/css/slide.css",
    jss: "/static/js/slide.js"
  })
})

app.listen(port, () => {
  console.log(`Server run on port: ${port}`)
})
