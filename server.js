const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');


});
app.get('/products', async(req, res) => {
    try{
            
            const products = await Product.find({});
            res.status(200).json({products});
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

app.get('/products/:id', async(req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json({product});
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});



// update a product

app.put('/products/:id', async(req, res) => {
    try{

        const {id} = req.params;
        

    }
    catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});


app.post('/products', async(req, res) => {
    try{

        const product = await Product.create(req.body);
        res.status(200).json({product});

    }catch(error){
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});  

mongoose.connect('mongodb+srv://ADMIN:admin123@cluster0.o8tltlj.mongodb.net/restfulAPI?retryWrites=true&w=majority')
    .then( () => {
        console.log('Connected to database');
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        }
        );

    })
    .catch( () => {
        console.log('Connection failed');
    }
    );












