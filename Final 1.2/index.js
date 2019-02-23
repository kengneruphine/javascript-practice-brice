const mong = require('mongoose');
const exp = require('express');
const hdl = require('express-handlebars');
const app = exp();
const path = require('path');
const bcrypt = require('bcryptjs');
const bdyps = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');


mong.connect('mongodb://localhost:27017/lib', {useNewUrlParser: true}).then(start => {
    console.log('Mongo is running');
}).catch(err =>{
    console.log('Couldn\'t start because of' + err);
})



app.use(exp.static(path.join(__dirname, 'public')));


app.engine('handlebars', hdl({defaultLayout: 'home'}));
app.set('view engine', 'handlebars');


app.use(bdyps.json());
app.use(bdyps.urlencoded({extended: true}));

app.use(session({
    secret: 'jumebrice',
    resave: true,
    saveUninitialized: true
}));

app.use(flash());



app.use((req, res, next) => {
    res.locals.message = req.flash('message');
    next();
})




const home = require('./routes/home/router');
app.use('/', home);







app.listen(4300, ()=>{
    console.log("We are logged on");
})