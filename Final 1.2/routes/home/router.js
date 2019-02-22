const express = require('express');
const router = express.Router();
const stud = require('../../models/stud');
const bcrypt = require('bcryptjs');


router.get('/', (req, res)=>{
    res.render('home/home');
})

router.get('/sign-up', (req, res)=>{
    res.render('home/sign-up')
})

router.get('/sign-in', (req, res)=>{
    res.render('home/sign-in');
})

router.get('/please', (req, res)=>{
    req.flash('message', "Please Join us Today");
    res.redirect('/sign-up');
})



router.get('/FET', (req, res)=>{
    let welcome = [];
    welcome.push({message: "Faculty of Engineering and Technology"});
    res.render('home/FET',{
        welcome: welcome
    });
})
router.get('/COT', (req, res)=>{
    let welcome = [];
    welcome.push({message: "College of Technology"});
    res.render('home/COT', {
        welcome: welcome
    });   
})
router.get('/FED', (req, res)=>{
    let welcome = [];
    welcome.push({message: "Faculty of Enducation"});
    res.render('home/FED', {
        welcome: welcome
    });
})
router.get('/FAVM', (req, res)=>{
    let welcome = [];
    welcome.push({message: "Faculty of Agriculture and Vetenary Medicine"});
    res.render('home/FAVM', {
        welcome: welcome
    });   
})
router.get('/SMS', (req, res)=>{
    let welcome = [];
    welcome.push({message: "Faculty of Social and Management Science"});
    res.render('home/SMS', {
        welcome: welcome
    });
})
router.get('/FHS', (req, res)=>{
    let welcome = [];
    welcome.push({message: "Faculty of Health Sciences"});
    res.render('home/FHS', {
        welcome: welcome
    });
})
router.get('/facHome', (req, res)=>{
    res.render('home/facHome');
})

router.post('/sign-up', (req, res) => {
    if(req.body.matNum.length < 8){
        res.redirect('/sign-up');
    }
    else if(req.body.uName.length == 0){
        res.redirect('/sign-up');
    }
    else if(req.body.p1 != req.body.p2){
        res.redirect('sign-up');
    }
    else{
        const newStud = new stud({
            matNum: req.body.matNum,
            uName: req.body.uName,
            faculty: req.body.faculty,
            p1: req.body.p1,
            p2: req.body.p2

        });
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newStud.p1, salt, (err, hash) => {
                if(err) return err;
                newStud.p1 = hash;
                newStud.p2 = hash;
                stud.findOne({matNum: req.body.matNum}).then(user =>{
                    if(user){
                        req.flash('message','Matriculation Number Already in use.');
                        res.redirect('/sign-up');
                    }
                    else if(!user){
                        stud.findOne({uName: req.body.uName}).then(user => {
                            if(user){
                                req.flash('message','User name taken.');
                                res.redirect('/sign-up');
                            }
                        })

                    }
                    else{
                        newStud.save().then(save => {
                            res.redirect('/sign-in');
                        }).catch(err => {
                            throw err;
                        });
                    }
                });
            });
        });
    }
})


router.post('/sign-in', (req, res) => {
    stud.findOne({uName: req.body.uName}).then(user =>{
        if(user){
            bcrypt.compare(req.body.password, user.p1, (err, match)=>{
                if(err){
                    console.log("Couldn't sign in because" + err);
                }
                else if(match){
                    res.redirect(`/${user.faculty}`);
                }
                else{
                    req.flash('message', 'Wrong User Name or Password');
                    res.redirect('/sign-in');
                }
            })
        }
        else{
            // req.flash('message', 'Please Sign up to our services');
            req.flash('message', 'Wrong User Name or Password');
            res.redirect('/sign-in');
        }
    })

})






module.exports = router;