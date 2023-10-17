const newsletterController = require("express").Router();
const newsletter = require("../models/newsletter");

//subscribe for email updates
newsletterController.post("/subscribe", async (req, res) => {
  const {email} = req.body;
    try {
        // const isExisting = await newsletter.findOne({ email: req.body.email });
        // if (isExisting) {
        //   throw new Error("Already such an email registered!");
        // }
    
        const newUser = await newsletter.create({ ...req.body });
        return res.status(201).json({ newUser });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    });
    
    module.exports = newsletterController;
    