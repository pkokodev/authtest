require('dotenv').config();

const express = require('express')
const app = express()

//------Session--------
const session = require('express-session');

app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {  maxAge: 1000 * 60 * 60 * 24 * 7 }
}));


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs');






app.get('/', (req, res, next) =>{
    
  console.log(req.session)
  res.send("welcome")
})

app.get('/register', (req, res, next) =>{
    res.render('register')
})
app.post('/register', (req, res, next) =>{
    console.log(req.body)
    res.send(req.body)
})


const port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log(`Listening on port: ${port}`)
})
