const express = require('express');
const morgan = require('morgan');

const app = express();

//register view engine
app.set('view engine', 'ejs')

// listen for requests

app.listen(3000);

// middleware & static files
app.use(express.static('public'));

app.use(morgan('dev'));


app.get('/', (req, res)=>{
    // res.send('<h1>Home page</h1>');
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'lorem epsum something...'},
        {title: 'Seema does micro exercises', snippet: 'lorem epsum something...'},
        {title: 'Rajeev goes to RSS shakha daily', snippet: 'lorem epsum something...'},
        {title: 'Om is learning Hospitality', snippet: 'lorem epsum something...'},
    ];
    res.render('index',{title:"Home",blogs})
    console.log('listening...')
});

app.get('/about', (req, res)=>{
    // res.send('<h1>About page</h1>');
    res.render('about',{title:"About"})
    console.log('listening...')
});

// blogs create
app.get('/blogs/create', (req, res)=>{
    res.render('create',{title:"Create Blog"});
});
// 404 page
app.use((req,res)=>{
    res.status(404).render('404',{title:"404 page"})
});