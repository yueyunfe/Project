var express = require('express');
const app = express();

e(express.static(__dirname+'/dist'));

l('*',(req,res)=>{
  status(200).sendFile(__dirname + '/dist/index.html');
})



sten(process.env.PORT || '8080');

