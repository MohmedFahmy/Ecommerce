const express =require('express');

const router = express.Router();

const {getAllProducts,insertProducts,deleteProduct}=require('../logic/products');

router.get('/',getAllProducts);
router.post('/',insertProducts);
router.delete('/:id',deleteProduct);

module.exports = router ;