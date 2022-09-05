# fcc-node-exercise-tracker
freeCodeCamp Back End and APIs Project 4 - Exercise Tracker

## Summary
This is a simple app to fulfill the requirements of project 5 - exercise app of freeCodeCamp's Back End and APIs certification.

## Table of contents
* [Tech Stack](#tech-stack)
* [Setup](#setup)*
* [Endpoints](#endpoints)
  * [Users](#users)
    * [Endpoint](#users---endpoint)
    * [Request Body](#users---request-body)
    * [Response Body](#users---response-body)
  * [User Exercises](#user-exercises)
    * [Endpoint](#user-exercises---endpoint)
    * [Request Body](#user-exercises---request-body)
    * [Response Body](#user-exercises---response-body)
  * [User Logs](#user-logs)
    * [Endpoint](#user-logs---endpoint)
    * [Request Body](#user-logs---request-body)
    * [Response Body](#user-logs---response-body)

## Tech Stack
- NodeJS
- Express
- MongoDB
- Mongoose

## Setup
Lorem ipsum dolor samet consecteur.

## Usage
Lorem ipsum dolor samet consecteur.

## Endpoints

### Users
Lorem ipsum dolor samet.

#### Users - Endpoint
```
POST /api/users
```

#### Users - Request Body
```
{
  username: String
}
```
#### Users - Response Body
```
{
  username: String,
  _id: Number
}
```
### User Exercises
Lorem ipsum dolor samet.

#### User Exercises - Endpoint
```
POST /api/users/:_id/exercises
```

#### User Exercises - Request Body
You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.
```
{
  username: "fcc_test",
  description: "test",
  duration: 60
}
```
#### User Exercises - Response Body
The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.
```
{
  username: "fcc_test",
  description: "test",
  duration: 60,
  date: "Mon Jan 01 1990",
  _id: "5fb5853f734231456ccb3b05"
}
```
### User Logs
Lorem ipsum dolor samet.

#### User Logs - Endpoint
```
GET /api/users/:_id/logs
```
#### User Logs - Response Body
A GET request to /api/users/:_id/logs will return the user object with a log array of all the exercises added.
```
{
  /* Response Body */
}
```
## Data Structures

#### Exercise
```

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
- [ ] You can POST to /api/users with form data username to create a new user.
- [ ] The returned response from POST /api/users with form data username will be an object with username and _id properties.
- [ ] You can make a GET request to /api/users to get a list of all users.
- [ ] The GET request to /api/users returns an array.
- [ ] Each element in the array returned from GET /api/users is an object literal containing a user's username and _id.
- [ ] You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.
- [ ] The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.
- [ ] You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.
- [ ] A request to a user's log GET /api/users/:_id/logs returns a user object with a count property representing the number of exercises that belong to that user.
- [ ] A GET request to /api/users/:_id/logs will return the user object with a log array of all the exercises added.
- [ ] Each item in the log array that is returned from GET /api/users/:_id/logs is an object that should have a description, duration, and date properties.
- [ ] The description property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string.
- [ ] The duration property of any object in the log array that is returned from GET /api/users/:_id/logs should be a number.
- [ ] The date property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string. Use the dateString format of the Date API.
- [ ] You can add from, to and limit parameters to a GET /api/users/:_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.

SRC: https://wrighter.vercel.app/wright?id=UqJizt3Vtmv20kMFfLC78
