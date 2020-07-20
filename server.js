const express = require('express');
const app = express();
const path = require('path');


const publicDirectory = path.join(__dirname,'./public')
app.use(express.static(publicDirectory))


app.set('view engine','hbs');

app.get('/',function(req,res){
	res.render('practice');
});
app.get('/quicksort',function(req,res){
	res.render('quicksort');
})
app.get('/mergesort',function(req,res){
	res.render('mergesort');
})
app.get('/heapsort',function(req,res){
	res.render('heapsort');
})
app.get('/selectsort',function(req,res){
	res.render('selectsort');
})
app.get('/insertsort',function(req,res){
	res.render('insertsort');
})
var PORT = process.env.PORT || 3555;
app.listen(PORT);
console.log("listening now");
