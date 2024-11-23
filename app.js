const express = require("express");
const app = express();
const bparser = require("body-parser");
const path = require("path");
const shopRouter = require("./routes/shop");
const errorRouter = require("./routes/errors");

app.set("view engine","ejs");
app.set("views",'views');

app.use(bparser.urlencoded({extended:false}));
app.use("/files",express.static(path.join(__dirname,"public")));

app.use("/shop",shopRouter);
app.use(errorRouter);

app.listen(8080);
