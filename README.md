# fcc-node-exercise-tracker
freeCodeCamp Back End and APIs Project 4 - Exercise Tracker

## Summary
Lorem ipsum dolor samet consecteur.

## Stack
Lorem ipsum dolor samet consecteur.

## Endpoints

```
POST /api/users
```
#### Request
```
{
  username: String
}
```
#### Response
```
{
  username: String,
  _id: Number
}
```
```
POST /api/users/:_id/exercises
GET /api/users/:_id/logs?[from][&to][&limit
```

## Data Structures

#### Exercise
```
{
  username: "fcc_test",
  description: "test",
  duration: 60,
  date: "Mon Jan 01 1990",
  _id: "5fb5853f734231456ccb3b05"
}
```
#### User
```
{
  username: "fcc_test",
  _id: "5fb5853f734231456ccb3b05"
}
```
#### Log
```

{
  username: "fcc_test",
  count: 1,
  _id: "5fb5853f734231456ccb3b05",
  log: [{
    description: "test",
    duration: 60,
    date: "Mon Jan 01 1990",
  }]
}
```
### Tests
```
You should provide your own project, not the example URL.
Waiting:You can POST to /api/users with form data username to create a new user.
Waiting:The returned response from POST /api/users with form data username will be an object with username and _id properties.
Waiting:You can make a GET request to /api/users to get a list of all users.
Waiting:The GET request to /api/users returns an array.
Waiting:Each element in the array returned from GET /api/users is an object literal containing a user's username and _id.
Waiting:You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.
Waiting:The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.
Waiting:You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.
Waiting:A request to a user's log GET /api/users/:_id/logs returns a user object with a count property representing the number of exercises that belong to that user.
Waiting:A GET request to /api/users/:_id/logs will return the user object with a log array of all the exercises added.
Waiting:Each item in the log array that is returned from GET /api/users/:_id/logs is an object that should have a description, duration, and date properties.
Waiting:The description property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string.
Waiting:The duration property of any object in the log array that is returned from GET /api/users/:_id/logs should be a number.
Waiting:The date property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string. Use the dateString format of the Date API.
Waiting:You can add from, to and limit parameters to a GET /api/users/:_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.
```

