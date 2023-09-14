const undergraduateController = require('express').Router()
const Undergraduate = require('../models/Undergraduate')


//register
undergraduateController.post('/register', async(req, res)=>{
    const {
        fullName,
        email,
        phoneNumber,
        contactAddress,
        countryOfResidence,
        city,
        state,
        nameOfInstitution,
        typeOfInstitution,
        department,
        expectedGraduationYear,
        industryYouSeekMentorshipIn,
        careerAspirations,
        subjectsOfInterest,
        availableHoursOfMentorship,
        skillsAndExperience,
        uploadCertificate,
        refereeFullName,
        refereeEmail,
        refereePhoneNumber,
        courseTitle,
        yearAcquired,
        doYouHaveATechSkill,
        wantToHaveATechKnowledge,
        signifyTechSkillYouWantToLearn,
        companyName,
        jobTitle,
        startDate,
        endDate,
        uploadCV,
        projects,
        modeOfMentorship,
        language,
        levelOfLanguage,
        startDate2,
        certificateName,
        yearAcquired2,
        uploadAdditionalCertificate,
        learningObjectives,
        availableDays,
        additionalComments,
      } = req.body;
    try {
        const isExisting = await Undergraduate.findOne({email: req.body.email})
        if(isExisting){
            throw new Error("Already such an email registered!")
        }
        // const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const newUser = await Undergraduate.create({...req.body})
        // const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "4h"})
        return res.status(201).json({newUser})
    } catch (error) {
        return res.status(500).json(error.message)
    }


})


module.exports = undergraduateController