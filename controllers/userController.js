const User = require('../models/user');
const { body, validationResult } = require("express-validator");

// You can POST to /api/users with form data username to create a new user.
exports.user_create_post = [
    // Username validation parameters
    body('username', 'username required')
        .trim()
        .isLength({min: 1})
        .escape(),
    (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a user object with the escaped and trimmed data.
        const user = new User({username: req.body.username});

        if(!errors.isEmpty()) {

        } else {
            // Check if user with the same username already exists
            User.findOne({username: req.body.username}).exec((err, found_user) => {
                if(err) {
                    return next(err);
                }
                if(found_user) {
                    res.send('User already exists!');
                } else {
                    user.save((err, data) => {
                        if(err) {
                            return next(err);
                        }
                        res.json(data);
                    })
                }
            })
            
            // The returned response from POST /api/users with form data username will be an object with username and _id properties.
            
        }
    }
]
// You can make a GET request to /api/users to get a list of all users.
exports.user_list_get = (req, res) => {
    // The GET request to /api/users returns an array.
    // Each element in the array returned from GET /api/users is an object literal containing a user's username and _id.
    User.find({}, "username")
        .sort({username: 1})
        .exec(function(err, list_users) {
            if(err) {
                return next(err);
            }
            // Successful
            res.json(list_users)
        })
}