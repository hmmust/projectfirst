
const get404error = (req,res)=>{
    res.render("shop/404.ejs",{title:"404: Page Not Found!"})
};


exports.get404error=get404error;
