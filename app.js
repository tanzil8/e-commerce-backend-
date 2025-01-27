import express from 'express'
import mongoose from 'mongoose';
import  flashProductRoutes from './routers/flash.js'
const app = express();
import 'dotenv/config'




// Middleware to parse JSON request body
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));



// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.use('/flash', flashProductRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});