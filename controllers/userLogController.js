const async = require('async');

const User = require('../models/user');
const UserExercise = require('../models/userExercise');

// You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.
exports.user_log_list_get = (req, res) => {
    
    const {params, query} = req;

    async.parallel(
        {
            user(callback) {
                User.findOne({id: params.id}).exec(callback);
            },
            // A GET request to /api/users/:_id/logs will return the user object with a log array of all the exercises added.
            user_exercises(callback) {
                // You can add from, to and limit parameters to a GET /api/users/:_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.
                const filter = {user: params.id, date: {}}

                if(query.from)
                    filter.date['$gte'] = query.from;
                else if(query.to)
                    filter.date['$lte'] = query.to;
                else
                    delete filter.date;

                // Each item in the log array that is returned from GET /api/users/:_id/logs is an object that should have a description, duration, and date properties.
                
                let mongoose_query = UserExercise.find(filter, 'description duration date')
                
                if(query.limit)
                    mongoose_query = mongoose_query.limit(query.limit);
                
                mongoose_query.exec(callback);
            },
            // A request to a user's log GET /api/users/:_id/logs returns a user object with a count property representing the number of exercises that belong to that user.
            user_exercise_count(callback) {
                UserExercise.countDocuments({user: params.id}).exec(callback)
            }
        },
        //callback
        function asyncResultsCallback(err, results) {
            const {user, user_exercises, user_exercise_count} = results;
            if(err) {
                return next(err);
            }
            const resObj = {
                filter: {
                    id: params.id,
                    query
                },
                username: user.username,
                count: user_exercise_count,
                log: user_exercises.map(user_exercise => ({
                    _id: user_exercise._id,
                    // The description property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string.
                    description: user_exercise.description,
                    // The duration property of any object in the log array that is returned from GET /api/users/:_id/logs should be a number.
                    duration: user_exercise.duration,
                    // The date property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string. Use the dateString format of the Date API.
                    date: user_exercise.date
                }))
            }
            res.json(resObj)
        }
    )
}