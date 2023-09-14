const mongoose = require("mongoose")

const undergraduateSchema = new mongoose.Schema({
    fullName: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        // required: true
    },
    phoneNumber: {
        type: Number,
        // required: true
    },
    contactAddress: {
        type: String,
        // required: true
    },
    countryOfResidence: {
        type: String,
        // required: true
    },
    city: {
        type: String,
        // required: true
    },
    state: {
        type: String,
        // required: true
    },
    nameOfInstitution: {
        type: String,
        // required: true
    },
    typeOfInstitution: {
        type: String,
        // enum: ["University, College"],
        // required: true
    },
    department: {
        type: String,
        // required: true
    },
    expectedGraduationYear: {
        type: Number,
        // required: true
    },
    industryYouSeekMentorshipIn: {
        options: [String],
        // required: true
    },
    careerAspirations: {
        type: String,
        // required: true,
        min: 4
    },
    subjectsOfInterest: {
        options: [String],
        // required: true
    },
    availableHoursOfMentorship: {
        type: Number
    },
    skillsAndExperience: {
        type: String,
        // required: true
    },
    uploadCertificate: {data: Buffer, contentType: String},
    refereeFullName: {
        type: String
    },
    refereeEmail: {
        type: String
    },
    refereePhoneNumber: {
        type: Number
    },
    courseTitle: String,
    yearAcquired: String,
    
    doYouHaveATechSkill: {
        type: String,
        enum: ['No', 'Yes']
    },
    wantToHaveATechKnowledge: {
        type: String,
        enum: ['No', 'Yes']
    },
    signifyTechSkillYouWantToLearn: String,
    //Previous Internshiups
    companyName: String,
    jobTitle: String,
    startDate: Date,
    endDate: Date,
    uploadCV: {
        data: Buffer,
        contentType: String 
    },
    projects: String,
    modeOfMentorship: String,
    //Languages
    language: String,
    levelOfLanguage: Number,
    startDate2: String,
    //Additional Certifications
    certificateName: String,
    yearAcquired2: Number,
    uploadAdditionalCertificate: {
        data: Buffer,
        contentType: String
    },
    learningObjectives: String,
    //Availability for meentoring
    availableDays: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'daysOfWeek',
        // required: true,
    },
    //additional info
    additionalComments: String
},{timestamps: true})

const Undergraduate =  mongoose.model("Undergraduate", undergraduateSchema)
module.exports = Undergraduate