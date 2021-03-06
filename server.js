const express = require('express');
const hbs = require('hbs');
var app = express();

const port = process.env.PORT || 3000;

app.set('view engine' , 'hbs');
app.use(express.static(__dirname +   '/public'));   

app.get('/',(req,res)=> {
   
    res.render('home.hbs',{
        pageTitle:'Home page',
        welcomeMessage:'Welcome to the website',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about' , (req,res)=> {
      res.render('about.hbs',{
          pageTitle:'About Page',
          currentYear: new Date().getFullYear()
      });
});

app.get('/bad', (req,res)=> {
     res.send({
         errorMessage:'Unable to fetch the page'
     })
});

app.listen(port,()=>{
    console.log(`server is up on port ${port}`);
});