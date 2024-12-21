const express=require('express');
const app=express();
app.set('view engine','ejs');
app.set('views','views');
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
const shopRouter = require('./routes/shop');
app.use(shopRouter);
const adminRoutes=require('./routes/admin');
app.use('/admin',adminRoutes);
const errorController=require('./controllers/errors');
app.use(errorController.get404);
mongoose.connect("mongodb://localhost:27017/testshop").then((result)=>{
    console.log("connect successfull to testshop");
}).catch((result)=>{

    console.log("Connection Failed to testshop database...");
});
app.listen(8080);