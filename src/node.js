var express = require('express');
var mysql = require('mysql');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors())

var database = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'password',
	database:'car_dealership'
});
database.connect(function(error){
	if(!!error){
		console.log(error);
	}else{
		console.log('Database connected');
	}
});

app.get('/cars',function(req, res){
	database.query("select newCarId,name,model from new_car",(err,response)=>{
        if(response) res.send(response)
        //res.status(400).send(err)
    })
    //console.log(cars)
    
});

app.get('/carsold',function(req, res){
	database.query("select oldCarId,name,model,status,distanceDriven from old_car",(err,response)=>{
        if(response) res.send(response)
        //res.status(400).send(err)
    })
    //console.log(cars)
    
});

app.get('/cars/:id',function(req, res){
    let id=req.params.id
	database.query(`select newCarId,name,model,sellingPrice, quantity from new_car where newCarId=${id}`,(err,response)=>{
        if(response) res.send(response)
        // res.send(err)
    })
    //console.log(cars)
    
});

app.get('/carsold/:id',function(req, res){
    let id=req.params.id
	database.query(`select oldCarId,name,model,sellingPrice, status, distanceDriven from old_car where oldCarId=${id}`,(err,response)=>{
        if(response) res.send(response)
        // res.send(err)
    })
    //console.log(cars)
    
});


app.post('/carsorder',function(req, res){
    console.log("hello")
    let model=req.body.model
    let date=new Date()
	database.query("INSERT INTO order_car (idCustomer,quantity,orderDate,modelId,carStatus) VALUES  (1,1,'"+date+"','"+model+"','new')",(err,response)=>{
        if(response) res.send(response)
        console.log(err)
        // res.send(err)
    })
    //console.log(cars)
    
});


app.post('/oldcarsorder',function(req, res){
    console.log("hello")
    let model=req.body.model
    let date=new Date()
	database.query("INSERT INTO order_car (idCustomer,quantity,orderDate,modelId,carStatus) VALUES (1,1,'"+date+"','"+model+"','old')",(err,response)=>{
        if(response) res.send(response)
        console.log(err)
        // res.send(err)
    })
    //console.log(cars)
    
});

app.listen(1337);