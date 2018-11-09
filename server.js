const express = require('express');
const mongoose = require('mongoose'); 

//4. setting up the routes to use
const users = require('./routes/api/usersAccount');
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");



const app = express(); 


//2 .DB config 
const db = require('./config/key').mongoURI;

//3. connect to mongoDB
mongoose
  .connect(db)
  .then(()=>{console.log('MongoDB Connected')})
  .catch(err => console.log(err));
  
//1. setting up express server
app.get('/', (req, res)=>res.send('Hello'))

//5. use Routes 
app.use('/api/users', users)
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`server running on port : ${port}`))