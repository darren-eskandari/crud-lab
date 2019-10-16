const express = require('express');
const app = express();
const Monsters = require('./Models/monsters.js');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

// set port
const PORT = 3000;


// middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));

// routes

// edit rout - get
app.get('/monsters/:index/edit', (req, res) => {
    res.render('edit.ejs', {
        monsters: Monsters[req.params.index],
        index: req.params.index,
    });
});

// edit route - put
app.put('/monsters/:index', (req, res) => {
    console.log(req.body, '<--- THIS IS REQ.BODY')
    const updatedMonster = {
        name: Monsters[req.params.index].name,
        ac: req.body.ac,
        hp: req.body.hp,
        att: req.body.att,
        dmg: req.body.dmg
    }
    Monsters.splice(req.params.index, 1, updatedMonster);
    res.render('show.ejs', { 
        monsters: Monsters[req.params.index] 
    });
});


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
  