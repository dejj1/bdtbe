const contactUsController = require("express").Router();
const contactUs = require("../models/contactUs");

//s
contactUsController.post("/contact-us", async (req, res) => {
    try {
        const {name, email, subject, message} = req.body;
    
    
        const newRequest = await contactUs.create({ ...req.body });
        return res.status(201).json({ newRequest });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    });
    
    module.exports = contactUsController;