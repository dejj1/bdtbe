const authController = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//register
authController.post('/register', async(req, res)=>{
    const {fullName, email, phoneNumber, comment} = req.body;

    try {
        const isExisting = await User.findOne({email: req.body.email})
        if(isExisting){
            throw new Error("Already such an email registered!")
        }
        // const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = await User.create({...req.body})
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "4h"})
        return res.status(201).json({newUser, token})
    } catch (error) {
        return res.status(500).json(error.message)
    }


})


module.exports = authController