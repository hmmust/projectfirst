const Shopproducts = ["Tea","Bread","Water"];

const getIndex = (req,res)=>{
    res.render("shop/index.ejs",{title:"Shop Main Page"});
};


const getProducts = (req,res)=>{
    res.render("shop/allproducts",{title:"All Products",products:Shopproducts});
};

const getProduct = (req,res)=>{
     res.render("shop/product",{title:"Add Product"});
};

const postProduct = (req,res)=>{
    Shopproducts.push(req.body.name); 
    res.redirect("/shop/products");
};

exports.getIndex=getIndex;
exports.getProduct=getProduct;
exports.postProduct=postProduct;
exports.getProducts= getProducts;