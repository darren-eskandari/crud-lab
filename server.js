const express = require('express');
const app = express();
const Monster = require('./Models/monsters.js');

// set port
const PORT = 3000;

app.get('/monsters', (req, res) => {
    res.render('index.ejs', {
        monster: Monster
    })
});




// listen to port
app.listen(PORT, () => {
    console.log("App is running on port: ", PORT);
});
  