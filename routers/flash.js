import express from 'express';
import flashProduct from '../modules/flashproduct.js'
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null, 'uploads/')
  },
  filename: (req, file, cb )=>{
const suffix = Date.now()
cb(null, suffix + '-' + file.originalname)
  }
})

const upload = multer({storage})

const router = express.Router();

router.post('/flashproduct', upload.single('photo'), async (req, res)=>{
    
const { name, price} = req.body

let flash = new flashProduct({ name, price})

flash = await flash.save()
res.status(201).json({ message: 'Flash product created', product: flash });

})


router.get('/flashproduct', async (req, res) => {
    try {
      const products = await flashProduct.find(); // Retrieve all products from MongoDB
      res.status(200).json(products); // Send products as the response
    } catch (error) {
      res.status(500).json({ error: 'Error fetching flash products', details: error.message });
    }
  });
  

export default router