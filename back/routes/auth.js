const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async(req, res) => {

    const { error } = registerValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const salt = await bcrypt.genSalt(10);
    const Password = await bcrypt.hash(req.body.Password, salt);

    const user = new User({
        Username: req.body.Username,
        Password,
        Type: req.body.Type
    });

    try {
        const savedUser = await user.save();
        res.json({ error: null, data: { userId: savedUser._id } });
    } catch (error) {
        res.status(400).json({ error });
    }
});

router.post("/login", async(req, res) => {

    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    const user = await User.findOne({ Username: req.body.Username });
    if (!user) return res.status(400).json({ error: "Username is wrong" });

    const validPassword = await bcrypt.compare(req.body.Password, user.Password);
    if (!validPassword)
        return res.status(400).json({ error: "Password is wrong" });


    const token = jwt.sign({
            name: user.Username,
            id: user._id,
        },
        process.env.SecretKey
    );

    res.header("auth-token", token).json({
        error: null,
        data: {
            token,
            type: user.Type
        },
    });
});

module.exports = router;