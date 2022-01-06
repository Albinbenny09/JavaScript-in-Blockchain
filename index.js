const express =require('express');
const res =require('express/lib/response');
const blockchainapp = express();
blockchainapp.get('/',(req,res) => res.send('welcome'));
blockchainapp.listen('5000',() => console.log('server started at port number 5000'))