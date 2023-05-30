const verifyToken = require("../middlewares/verify-token");
const router = require("express").Router();
const User = require("../models/user");

router.post("/verify/pwd", verifyToken, async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.decoded._id }).populate(
            "adress"
        );
        if(user.role === "pwd")
        {
            res.json({
                success: true,
            });
        }
        else
        {
            res.json({
                success: false,
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

router.post("/verify/govt", verifyToken, async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.decoded._id }).populate(
            "adress"
        );
        if(user.role === "govt")
        {
            res.json({
                success: true,
            });
        }
        else
        {
            res.json({
                success: false,
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

router.post("/verify/contractor", verifyToken, async (req, res) => {
    try {
        console.log(req.decoded._id);
        let user = await User.findOne({ _id: req.decoded._id }).populate(
            "adress"
        );
        if(user.role === "contractor")
        {
            res.json({ 
                success: true,
            });
        }
        else
        {
            res.json({
                success: false,
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

router.post("/verify/admin", verifyToken, async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.decoded._id }).populate(
            "adress"
        );
        if(user.role === "admin")
        {
            res.json({
                success: true,
            });
        }
        else
        {
            res.json({
                success: false,
            });
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});


module.exports = router;
