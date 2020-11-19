const express = require('express');
const routes = express.Router();
const blogController = require('../controllers/blogController');




// routes.get('/add-blog', (req, res) => {
//     // const blog = new Blog({
//     //     title: 'Pandat2',
//     //     snippet: 'hello everyone',
//     //     body: 'I am proud pandat'
//     // });
//     // blog.save()
//     Blog.create({
//         title: 'Pandat3',
//         snippet: 'how you doin?',
//         body: 'I am fine'
//     })
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => { console.log(err) });

// })

// routes.get('/all-blog', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => { console.log(err) })
// })


// routes.get('/single-blog', (req, res) => {
//     Blog.findById('5f93ff0ed9814809188c33d6')
//         .then((result) => { res.send(result) })
//         .catch((err) => { console.log(err) })
// })


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


routes.get('/about', blogController.blog_about)

routes.get('/create', blogController.blog_create_get)

routes.get('/', blogController.blog_index)

routes.post('/', blogController.blog_create_post)

routes.get('/:id', blogController.blog_details)


routes.delete('/:id', blogController.blog_delete)

//redirect
// routes.get('/about-me', blogController.blog_about)

module.exports = routes;