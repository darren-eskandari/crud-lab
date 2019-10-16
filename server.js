const express = require('express');
const app = express();
const Monsters = require('./Models/monsters.js');
const methodOverride = require('method-override');


// set port
const PORT = 3000;


// middleware
app.use(methodOverride('_method'));


// routes


// index route
app.get('/monsters', (req, res) => {
    res.render('index.ejs', {
        monsters: Monsters
    })
});

// show route
app.get('/monsters/:index', (req, res) => {
    res.render('show.ejs', { 
        monsters: Monsters[req.params.index] 
    });
});

// delete route
app.delete('/monsters/:index', (req, res) => {
    console.log(req.params.index);
    Monsters.splice(req.params.index, 1);
    res.redirect('/monsters');
});



// listen to port
app.listen(PORT, () => {
    console.log("App is running on port: ", PORT);
});
  