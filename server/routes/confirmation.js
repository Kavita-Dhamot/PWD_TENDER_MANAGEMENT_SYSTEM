const router = require("express").Router();
const User = require("../models/user");
const jwt = require('jsonwebtoken');

router.get('/confirmation/:token', async (req, res) => { 
  try {
    let user;
      jwt.verify(req.params.token, process.env.SECRET, (err,decoded) => {
        if(err){
            res.json({
                success: false,
                message: "Failed to confirm account"
            });
        } else {
            user = decoded;
            
        }
    });
    // console.log(user);
    if(user){
      
      await User.findOneAndUpdate(
        { _id: user._id },
        {
          $set: {
             confirmed : 1,
          },
        },
        { upsert: true }
      );
    }
    } catch (e) {
      res.send('error');
    }
  
    return res.redirect('http://localhost:8080/login');
  });

router.post("/pwdconfirm/", async (req, res) => {
    try
    {
        let user = await User.findOneAndUpdate(
            { _id: req.body.contractor_id },
            {
                $set: {
                    confirmed: 2,
                },
            },
            { upsert: true }
        );
        await user.save();
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});


module.exports = router;
