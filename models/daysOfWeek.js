const mongoose = require ('mongoose')
const daysOfWeekSchema = new mongoose.Schema({
    day: {
        // Day of the week (0 for Sunday, 1 for Monday, and so on)
        type: Number,
        required: true,
        min: 0,
        max: 6
    },
    //start time in HH:mm format
    startTime: {
        type: String, 
        required: true,
        validate: {
            validator: function (value) {
                // Regular expression to validate HH:mm format
                return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
        },
             message: props => `${props.value} is not a valid time format (HH:mm)`,
    },
  },
   // End time in HH:mm format
   endTime: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        // Regular expression to validate HH:mm format
        return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
      },
      message: props => `${props.value} is not a valid time format (HH:mm)`,
    },
  },
    
})

const daysOfWeek = mongoose.model('daysOfWeek', daysOfWeekSchema);

module.exports = daysOfWeek;