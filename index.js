const data = require ('./MOCK_DATA.json');
const express = require ('express')
const path = require ('path');

const app = express();

//this is our root, with a callback of req, res
// app.use('/random-name', (req, res) => {
//     return res.json(data[0]); //this just returns the MOCK jsdon app at position 0 in the table of data
// })
//        port#    #this just shows output on the console

app.set('views' , path.join(__dirname, 'views')) // setting the app recived value of views and set'path'(built in node librabry) in our current directory 
app.set ('view engine', 'hbs'); //setting view engine to handlebars
app.use(express.static('public')); // this sets public assests directory, we are serving content from the 'public' folder

app.use ('/animal', (req, res ) => {
    const { animal } = data[Math.round(Math.random() * data.length)]
    const { number } = data[Math.round(Math.random() * data.length)]
    return res.json({ animal, number });
});

app.use ('/', (req , res) => {
    return res.render('index')
})


app.listen(3001, () => console.log('App listening'));