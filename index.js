const data = require ('./MOCK_DATA.json');
const express = require ('express')

const app = express();

//this is our root, with a callback of req, res
// app.use('/random-name', (req, res) => {
//     return res.json(data[0]); //this just returns the MOCK jsdon app at position 0 in the table of data
// })
//        port#    #this just shows output on the console

app.use ('/animal', (req, res ) => {
    const { animal } = data[Math.round(Math.random() * data.length)]
    const { number } = data[Math.round(Math.random() * data.length)]
    return res.json({ animal, number });
});



app.listen(3001, () => console.log('App listening'));