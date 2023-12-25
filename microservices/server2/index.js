const express = require('express');
const User = require('./routes/userRoute');
const Product = require('./routes/productRoute');
const Cart = require('./routes/cartRoute');
const app = express();
const port = 5000;
const cors = require('cors');
const connectdb = require('./configDB/conn');
const dotenv = require("dotenv")

app.use(cors())
app.use(express.json())
connectdb()
dotenv.config()

app.use('/api/user', User)
app.use('/api/product', Product)
app.use('/api/cart', Cart)

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
