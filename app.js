const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes');
const { result } = require('lodash');
const { response } = require('express');

const dbURI = 'mongodb+srv://blog:blog1234@pandatcommunity.pefp1.mongodb.net/pandat?retryWrites=true&w=majority'

//database connect
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(3000)
        console.log('db connected')
    })
    .catch((err) => { console.log(err) });

const app = express();

//register engine
app.set('view engine', 'ejs');

//middleware + static
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


//morgan
app.use(morgan('dev'));
app.get('/', (req, res) => {
    // res.send('<p>Pandat ka</p>');
    res.redirect('/blogs');
});


//blog routes
app.use('/blogs', blogRoutes);

//404
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})
