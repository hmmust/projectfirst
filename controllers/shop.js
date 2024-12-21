exports.getIndex = (req,res,next)=> {
    res.render("shop/index.ejs",{title:"Main Page"});
};
exports.getProducts = (req,res,next)=> {
    res.render("shop/allproducts.ejs",{title:"Main Page",products:[]});
};
exports.getProduct = (req,res,next)=> {};
exports.postCart= (req,res,next)=> {};
exports.getCart= (req,res,next)=> {};
exports.postCartDeleteItem= (req,res,next)=> {};
exports.postOrder= (req,res,next)=> {};
exports.getOrders= (req,res,next)=> {};