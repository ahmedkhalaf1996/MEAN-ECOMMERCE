//  khalafahmed7396 gSare5NDkEKglbtt  // mongo user & pass
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb+srv://khalafahmed7396:gSare5NDkEKglbtt@cluster0-r5n2s.mongodb.net/mean?retryWrites=true',{ useNewUrlParser: true })
 .then(()=>{
   console.log('conntected to mongodb successfuly');
 })
 .catch(() =>{
   console.log('connnection failed!');
 });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
/// this function here to allow check visite to this path form the server
app.use('/images', express.static(path.join(__dirname,'images')));
app.use('/', express.static(path.join(__dirname, 'angular')));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
   "Access-Control-Allow-Headers",
   "Origin, X-Requested-With, Content-Type, Accept, Authorization"
   );
   res.setHeader("Access-Control-Allow-Methods",
    "GET,POST, PATCH, PUT, DELETE, OPTIONS")
  next();
});

app.use('/api/posts',  postsRoutes);
app.use('/api/user',  userRoutes);
/// this code to let anguler serve the athor routes
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "angular", "index.html"));
});
/// end here

module.exports = app;
