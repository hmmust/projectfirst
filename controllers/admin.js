const product = require("../models/products");

exports.getAddProduct= (req,res,next)=> {
    res.render("admin/add-product.ejs",{title:"Add Product"});
};
exports.postAddProduct= (req,res,next)=>{
    b_name = req.body.name;
    b_price= req.body.price;
    b_description= req.body.description;
    const newProduct = new product({
        name:b_name,
        price: b_price,
        description:b_description
    });
    newProduct.save();
    res.redirect("/admin/products");
};
exports.getProducts = (req,res,next)=> {
    product.find().then((allproducts)=>{
        res.render("admin/products.ejs",{title:"Admin Shop Products",products:allproducts});
    });

};
exports.getDeleteProduct= (req,res,next)=>{
    const product_id = req.params.ProductId;
    product.findByIdAndDelete(product_id).then((result)=>{
        res.redirect("/admin/products");
    });

};

exports.getEditProduct= (req,res,next)=> {
    const product_id = req.params.ProductId;
    product.findById(product_id).then((found_product)=>{
        res.render("admin/edit-product.ejs",{title:"Edit Product",p:found_product});
    });
};
exports.postEditProduct= (req,res,next)=>{
    b_name = req.body.name;
    b_price= req.body.price;
    b_description= req.body.description;
    b_id= req.body.id;
    product.findById(b_id).then((found_product)=>{
        found_product.name= b_name;
        found_product.price= b_price;
        found_product.description= b_description;
        found_product.save();
        
        res.redirect("/admin/products");
    });

};
