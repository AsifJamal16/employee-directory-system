const express=require('express');
const app=express();
const path=require('path')
const User = require('./model/user');
app.use(express.json());//this is for the form handling
app.use(express.urlencoded({extended:true}));//this is for the form handling
app.use(express.static(path.join(__dirname,'public')));//this is for the front end access 
app.set('view engine','ejs');//this is for the connection of ejs files 

app.get('/',function(req,res){
  res.render('index');
})
app.post('/create',async function(req,res){
  await User.create({
    image: req.body.image,
    username: req.body.username,
    email: req.body.email,
    message: req.body.message
  });
  res.redirect('/read');
})
app.get('/read',async function(req,res){
  const users=await User.find();
  res.render('read', { users });
})
app.get('/delete/:id', async function(req,res){
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/read');
});
app.get('/edit/:id', async function(req,res){
  const user = await User.findById(req.params.id);
  res.render('edit', { user });
});
app.post('/update/:id', async function(req,res){
  await User.findByIdAndUpdate(req.params.id,{
    image: req.body.image,
    username: req.body.username,
    email: req.body.email,
    message: req.body.message
  });

  res.redirect('/read');
});
module.exports=app;





