const express = require('express')
const app = express()

app.get('/products', (req, res) => res.send(getProductList()))

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
