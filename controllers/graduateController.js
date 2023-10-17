const graduateController = require("express").Router();
const Graduate = require("../models/Graduate");

//register
graduateController.post("/register", async (req, res) => {
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
    graduationYear,
    industryYouSeekMentorshipIn,
    careerAspirations,
    subjectsOfInterest,
    skillsAndExperience,
    availableHoursOfMentorship,
    refereeFullName,
    refereeEmail,
    refereePhoneNumber,
    courseTitle,
    yearAcquired,
    uploadCertificate,
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
    // const isExisting = await Graduate.findOne({ email: req.body.email });
    // if (isExisting) {
    //   throw new Error("Already such an email registered!");
    // }
    // const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const newUser = await Graduate.create({ ...req.body });
    // const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "4h"})
    return res.status(201).json({ newUser });
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = graduateController;
