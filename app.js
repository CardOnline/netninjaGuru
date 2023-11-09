const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

//connect to mongo db
const app = express();

const dbURI='mongodb+srv://printonline1234:YwJCpxW6Roch3XOF@gurukul1.rxshjnf.mongodb.net/gurukul1?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => console.log('connected to db...'))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs')

// listen for requests is being done in mongoose. connect .then above here.
app.listen(3000);


// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

// mongoose and mongo sandbox routes

app.get('/add-blog', (req,res)=>{
    const blog = new Blog({
        title: 'new blog 2',
        snippet:'about my new blog',
        body: 'more about my new blog'
    });
    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
});

app.get('/all-blogs', (req,res)=>{
    Blog.find()
        .then((result) =>{
            res.send(result);
        })
        .catch((err) =>{
           console.log(err); 
        })
})


app.get('/single-blog', (req, res)=>{
    Blog.findById('654b660c8ae7f2c3ca37d0c1')
    .then((result) =>{
        res.send(result);
    })
    .catch((err) =>{
       console.log(err); 
    })
})
app.get('/', (req, res)=>{
    res.redirect('/blogs');
});

app.get('/about', (req, res)=>{
    // res.send('<h1>About page</h1>');
    res.render('about',{title:"About"})
});


// blog routes
app.use(blogRoutes);

// 404 page
app.use((req,res)=>{
    res.status(404).render('404',{title:"404 page"})
});