const express = require('express');
const routes = express.Router();
const blogController = require('../controllers/blogController')




routes.get('/add-blog', (req, res) => {
    // const blog = new Blog({
    //     title: 'Pandat2',
    //     snippet: 'hello everyone',
    //     body: 'I am proud pandat'
    // });
    // blog.save()
    Blog.create({
        title: 'Pandat3',
        snippet: 'how you doin?',
        body: 'I am fine'
    })
        .then((result) => {
            res.send(result)
        })
        .catch((err) => { console.log(err) });

})

routes.get('/all-blog', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => { console.log(err) })
})


routes.get('/single-blog', (req, res) => {
    Blog.findById('5f93ff0ed9814809188c33d6')
        .then((result) => { res.send(result) })
        .catch((err) => { console.log(err) })
})


//middleware + next
// routes.use((req, res, next) => {
//     console.log('request made');
//     console.log('hostname ' + req.hostname);
//     console.log('method :' + req.method);
//     console.log('path ' + req.path);
//     next();
// })

// routes.use((req, res, next) => {
//     console.log('next middleware')
//     next();
// })

//get request


routes.get('/about', (req, res) => {
    // res.send('<p>Pandat ka</p>');
    res.render('about', { title: 'About' });
});

routes.get('/create', (req, res) => {
    res.render('create', { title: 'Create Blog' });
})

routes.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', mario: result })
        })
        .catch((err) => { console.log(err) })
})

routes.post('/', (req, res) => {
    const blogs = new Blog(req.body)
    blogs.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((err) => {
            console.log(err)
        })
})

routes.get('/:id', (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: "Blog details" })
        })
        .catch((err) => {
            console.log(err)
        })
})


routes.delete('/:id', (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => { console.log(err) })

})

//redirect
routes.get('/about-me', (req, res) => {
    res.redirect('/about');
});

module.exports = routes;