const express =  require("express");
const router = express.Router();
const shopController  = require("../controllers/shop");

router.get('/',shopController.getIndex);

router.get('/products',shopController.getProducts);

router.get('/product',shopController.getProduct);

router.post('/product',shopController.postProduct);



module.exports=router;