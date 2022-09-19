const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserExerciseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

// UserExerciseInstanceSchema.virtual('username').get(function() {
//     return this.user.username;
// })

module.exports = mongoose.model("UserExercise", UserExerciseSchema);