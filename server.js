// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// for static files like css
app.use("/static", express.static(__dirname + "/static"));


// use res.render to load up an ejs view file

// dashboard page 
app.get('/dashboard', function(req, res) {

    var projects = [
        {
            id:1,
            img:"https://picsum.photos/500/300/?image=10",
            name:"Blinders Glass",
            description:"Next, you need to convert your static HTML files into dynamic EJS ones and in the way EJS expects.",
            budget:20000,
            date:"18th Sept, 2020",
            skill:"IOT, Machine Learning, Networks",
            proposals:10
            
        },
        {
            id:2,
            img:"https://picsum.photos/500/300/?image=5",
            name:"GFIAL website",
            description:"Next, you need to convert your static HTML files into dynamic EJS ones and in the way EJS expects.",
            budget:10000,
            date:"15 November, 2019",
            skill:"Front end web dev",
            proposals:10
            
        },
        {
            id:3,
            img:"https://picsum.photos/500/300/?image=11",
            name:"Node js App",
            description:"Next, you need to convert your static HTML files into dynamic EJS ones and in the way EJS expects.",
            budget:5000,
            date:"20th December, 2019",
            skill:"JavaScript, Node",
            proposals:10
            
        }
        // {
        //     id:4,
        //     img:"",
        //     name:"React App",
        //     description:"Next, you need to convert your static HTML files into dynamic EJS ones and in the way EJS expects.",
        //     budget:10000,
        //     date:"",
        //     skill:"Javascript, React",
        //     proposals:10
            
        // },
        // {
        //     id:5,
        //     img:"",
        //     name:"Project 5",
        //     description:"Next, you need to convert your static HTML files into dynamic EJS ones and in the way EJS expects.",
        //     budget:"",
        //     date:"",
        //     skill:"",
        //     proposals:20
            
        // },
        // {
        //     id:6,
        //     img:"",
        //     name:"Project 6",
        //     description:"Next, you need to convert your static HTML files into dynamic EJS ones and in the way EJS expects.",
        //     budget:"",
        //     date:"",
        //     skill:"",
        //     proposals:30
            
        // }

    ];

    res.render('pages/dashboard',{
        projects: projects
    });
});

app.get('/register', function(req,res) {
    res.render('pages/register');
});

app.get('/login', function(req,res) {
    res.render('pages/login');
});

app.get('/forget', function(req,res) {
    res.render('pages/forget-pass');
});

// landing page
app.get('/', function(req,res) {
    res.render('pages/index');
});


app.listen(3000);
console.log('3000 is the magic port');