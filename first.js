const express = require('express')
const app= express()
app.get("/",(req,res)=>{
res.send("<h1>Welcome!</h1>")

});
app.listen(8000);