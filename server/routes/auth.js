const router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verify-token');
const transporter = require('../middlewares/transporter');

// /* Signup Route */
router.post('/auth/signup',async(req,res) => {
    if(!req.body.email || !req.body.password) {
        res.json({success: false, message: "Please Enter email or password"});
    }
    else {
        try {
            let foundUser = await User.findOne({ email: req.body.email});
            if(foundUser && foundUser.confirmed == 1) {
                res.status(403).json({
                    success: false,
                    message: "User already exists."
                });
                return;
            }
            let newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            newUser.role = req.body.role;   //request has to send role (possible roles : 'pwd','contractor', 'govt'
            newUser.confirmed = 0;
            await newUser.save();
            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                expiresIn: 604800 // 1 week
            }, 
            (err, emailToken) => {
                const url = `http://localhost:3000/api/confirmation/${emailToken}`;
      
                transporter.sendMail({
                  to: newUser.email,
                  subject: 'Confirm Email',
                  html: `Please click this link to login to your account:   <a href="${url}">${url}</a>`,
                });
              },
            );
            res.json({
                success: true,
                token: token,
                message: "Successfully created a new user with role: "+req.body.role,
            });
        } catch(err){
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }
});
//
router.post('/auth/adminsignup',async(req,res) => {
    if(!req.body.email || !req.body.password) {
        res.json({success: false, message: "Please Enter email or password"});
    } else {
        try {
            let newUser = new User();
            newUser.name = req.body.name;
            newUser.email = req.body.email;
            newUser.password = req.body.password;
            newUser.role = "admin";
            await newUser.save();
            let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
                expiresIn: 604800 // 1 week
            });

            res.json({
                success: true,
                token: token,
                message: "Successfully created a new admin :)",
            });
        } catch(err){
            res.status(500).json({
                success: false,
                message: err.message
            });
        }
    }
});
/* Login Route */
router.post("/auth/login", async(req,res) => {
    try{
        let foundUser = await User.findOne({ email: req.body.email});
        if(!foundUser){
            res.status(403).json({
                success: false,
                message: "Authentication failed, User not found"
            });
        }
        else if (foundUser.confirmed === 0) {
            res.status(403).json({
                success: false,
                message: "Please confirm your email to login"
            });
        }
        //1 is being checked only for contractor, others dont need approval
        else if (foundUser.confirmed === 1 && foundUser.role === "contractor") {
            res.status(403).json({
                success: false,
                message: "Please wait for PWD to confirm your email"
            });
        }
        else {
            if(foundUser.password === req.body.password) {
                let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    role: foundUser.role,
                    token: token
                });
            } else {
                res.status(403).json({
                    success: false,
                    message: err.message
                });
            }
        }
    } catch(error) {
        // console.log(req.body);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});


module.exports = router;