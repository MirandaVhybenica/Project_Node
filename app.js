const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res) => {
    res.render('index',{title: 'Portfolio'});
});

app.get('/about',(req,res) => {
    res.render('about',{title: 'Portfolio'});
});

app.get('/hobbies',(req,res) => {
    res.render('hobbies',{title: 'Portfolio'});
});

app.get('/favorites',(req,res) => {
    res.render('favorites',{title: 'Portfolio'});
});

app.get('/pet',(req,res) => {
    res.render('pet',{title: 'Portfolio'});
});

app.get('/contact',(req,res) => {
    res.render('contact',{title: 'Portfolio'});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});