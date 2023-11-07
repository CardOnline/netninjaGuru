const express = require('express');

const app = express();

//register view engine
app.set('view engine', 'ejs')

// listen for requests

app.listen(3000);

app.get('/', (req, res)=>{
    // res.send('<h1>Home page</h1>');
    res.sendFile('./views/index.html', {root: __dirname})
    console.log('listening...')
});

app.get('/about', (req, res)=>{
    // res.send('<h1>About page</h1>');
    res.sendFile('./views/about.html', {root: __dirname})
    console.log('listening...')
});

// redirect
app.get('/about-us', (req,res)=>{
    res.redirect('/about');
});

// 404 page
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html', {root: __dirname})
});