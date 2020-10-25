if(process.env.NODE_ENV!=='production'){
    require('dotenv').config()
}


const expess= require("express")
const app=expess()
const expresslayouts = require("express-ejs-layouts")


const indexrouter= require('./routes/index')
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')
app.use(expresslayouts)
app.use(expess.static('public'))
app.use('/',indexrouter)

const mongoose= require("mongoose")
const bodyParser = require("body-parser")
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true})
const db= mongoose.connection
db.on('error',error=> console.error(error))
db.once('open',()=>console.log('connected to mongoose'))

app.listen(process.env.PORT || 3080)