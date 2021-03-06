const express = require("express")
const router = express.Router();
const User = require("../Model/user.model")
const crudController = require("./crud.controller")
const userController = crudController(User)
const jwt = require('jsonwebtoken');
require("dotenv").config();
const newToken = (user) => jwt.sign({ user }, 'unacademy')

router.post("/register", async (req, res) => {
    // console.log(process.env.JWT_SECRET_KEY)
    try {
        let user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.status(401).json("User already exist")
        }

        user = await User.create(req.body)
        let token = newToken(user)
        res.status(201).json({ token })
    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message })
    }
})
router.post("/login", async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })

        if (!user) {
            return res.status(401).json("Number is Invalid")
        }

        let token = newToken(user)
        res.status(201).json({ token })

    }
    catch (e) {
        return res.status(500).json({ status: "failed", message: e.message })
    }
})


module.exports = router