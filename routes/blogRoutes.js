const express = require('express');
const Blog = require('../models/blog');

const router = express.Router();

router.get('/blogs', (req, res) =>{
    Blog.find().sort({ createdAt: -1})
        .then((result)=>{
            res.render('index', {blogs:result ,title:'All blogs'});
        })
        .catch((err) =>{
            console.log(err); 
         })
})

router.post('/blogs', (req,res)=>{
    console.log(req.body);
    const blog = new Blog(req.body);

    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err) =>{
            console.log(err); 
         })

})

router.get('/blogs/:id', (req,res)=>{
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
        .then((blog) =>{
            res.render('details', {blog: blog, title: 'Blog Details'});
        })
        .catch((err) =>{
            console.log(err); 
         })
})

router.delete('/blogs/:id', (req, res)=>{
    const id = req.params.id;
    console.log(id);
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({redirect: '/blogs'});
        })
        .catch(err => console.log(err));
})




// blogs create
router.get('/blogs-create', (req, res)=>{
    res.render('create',{title:"Create Blog"});
});

module.exports = router;