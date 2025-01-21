import express from 'express';
import flashProduct from '../modules/flashproduct.js'


const router = express.Router();

router.post('/flash-product', async (req, res)=>{
    
const {img, name, price} = req.body

let flash = new flashProduct({img, name, price})

flash = await flash.save()
res.status(201).json({ message: 'Flash product created', product: flash });

})


router.get('/flash-product', async (req, res) => {
    try {
      const products = await flashProduct.find(); // Retrieve all products from MongoDB
      res.status(200).json(products); // Send products as the response
    } catch (error) {
      res.status(500).json({ error: 'Error fetching flash products', details: error.message });
    }
  });
  

export default router