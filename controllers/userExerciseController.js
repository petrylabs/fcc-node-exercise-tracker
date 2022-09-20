const User = require('../models/userExercise');
const { body, validationResult } = require("express-validator");
const UserExercise = require('../models/userExercise');

// You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.
exports.user_exercise_create_post = [
    (req, res, next) => {
        //console.log('req.body', req.body);
        next();
    },
    // Validate and sanitize fields.
    body(':_id', ':_id must not be empty')
        .trim()
        .isLength({min: 1})
        .escape(),
    body('description', 'description must not be empty')
        .trim()
        .isLength({min: 1})
        .escape(),
    body('duration', 'duration must not be emoty')
        .trim()
        .isLength({min: 1})
        .escape(),
    body('date', 'date must not be empty')
        .trim()
        .isLength({min: 1})
        .escape(),
    // Process request after validation and sanitization
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        User.findOne({id: req.body.username}).exec((err, found_user) => {
            if(err) {
                return next(err);
            }
        })

        // Create an exercise with escaped and trimmed data.
        const userExercise = new UserExercise({
            user: req.body[':_id'],
            description: req.body.description,
            duration: req.body.duration,
            date: req.body.date
        });

        if(!errors.isEmpty()) {
            // There are errors
            res.json({errors: errors.array()})
            return;
        }

        userExercise.save(async (err, savedUser) => {
            if(err) {
                return next(err);
            }
            // The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.
            // TO-DO: Missing username and formatted date
            const populatedUser = await savedUser.populate({path: 'user', select: '_id username'})
            const resObj = {
                _id: populatedUser.user._id,
                username: populatedUser.user.username,
                description: userExercise.description,
                duration: userExercise.duration,
                date: (new Date(userExercise.date)).toDateString()
            }
            res.json(resObj);
        })
    }
]

exports.user_exercise_list_get = (req, res) => {
    // The GET request to /api/users returns an array.
    // Each element in the array returned from GET /api/users is an object literal containing a user's username and _id.
    UserExercise.find()
        .sort({date: 1})
        .exec(function(err, list_user_exercises) {
            if(err) {
                return next(err);
            }
            // Successful
            res.json(list_user_exercises)
        })
}