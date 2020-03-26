const express=require('express')
const app=express()
const port=process.env.PORT || 3000 
var cors = require('cors')
app.use(cors())

app.use(require(__dirname+'./component/scrapModule'))

app.listen(port,()=>{
  console.log('this is running on port '+port)
})