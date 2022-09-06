# fcc-node-exercise-tracker
freeCodeCamp Back End and APIs Project 4 - Exercise Tracker

## Summary
This is a simple app to fulfill the requirements of project 5 - exercise app of freeCodeCamp's Back End and APIs certification.

## Table of contents
* [Tech Stack](#tech-stack)
* [Setup](#setup)*
* [Endpoints](#endpoints)
  * [Users](#users)
    * [Create a new user](#create-a-new-user)
      * [Endpoint](#post-users-endpoint) 
      * [Request](#post-users-request-body) 
      * [Response](#post-users-response-body)
    * [List all users](#list-all-users)
      * [Endpoint](#get-users-endpoint) 
      * [Response](#get-users-response-body)  
  * [User Exercises](#user-exercises)
    * [Endpoint](#post-user-exercises-endpoint)
    * [Request](#post-user-exercises-response-body)  
    * [Response](#post-user-exercises-request-body)
  * [User Logs](#user-logs)
    * [Endpoint](#get-user-logs-endpoint)   
    * [Response](#get-user-logs-response-body)

## Tech Stack
- NodeJS
- Express
- MongoDB
- Mongoose

## Project Setup
This is how this project is setup:
```
📂 root
|
|-📂 config
| |
| |-📄 doc1.js
| |-📄 doc2.js
|
|-📂 src
| |
| |-📄 doc1.js
| |-📄 doc2.js
|
|-📂 tests
| |
| |-📄 doc1.js
| |-📄 doc2.js

```

## Setup
Lorem ipsum dolor samet consecteur.

## Usage
Lorem ipsum dolor samet consecteur.

## Endpoints

### Users

#### Create a new user

##### POST Users Endpoint
```
POST /api/users
```

##### POST Users Request Body
You can `POST` to `/api/users` with form data `username` to create a new user.
```
{
  username: "John_Doe"
}
```
##### POST Users Response Body
The returned response from `POST /api/users` with form data username will be an object with `username` and `_id` properties.
```
{
  username: "John_Doe",
  _id: 13213123
}
```

#### List all users

##### GET Users Endpoint
You can make a GET request to /api/users to get a list of all users.
```
GET /api/users
```

##### GET Users Response Body
The GET request to /api/users returns an array. Each element in the array returned from `GET /api/users` is an object literal containing a user's `username` and `_id`.
```
[
 {"_id":"6120c6d1f5860e05a3652f44","username":"efs","__v":0},
 {"_id":"6120dc43f5860e05a3652f49","username":"itsakanda","__v":0},
 {"_id":"6120ef4ff5860e05a3652f4a","username":"t","__v":0},
 {"_id":"6120ef54f5860e05a3652f4b","username":"julliathome","__v":0}
]
```

### User Exercises

#### POST User Exercises Endpoint
```
POST /api/users/:_id/exercises
```

#### POST User Exercises Request Body
You can `POST` to `/api/users/:_id/exercises` with form data `description`, `duration`, and optionally `date`. If no date is supplied, the current date will be used.
```
{
  username: "fcc_test",
  description: "test",
  duration: 60
}
```
#### POST User Exercises Response Body
The response returned from `POST /api/users/:_id/exercises` will be the user object with the exercise fields added.
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

#### GET User Logs Endpoint
You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.
```
GET /api/users/:_id/logs
```
#### GET User Logs Response Body
A request to a user's log `GET /api/users/:_id/logs` returns a user object with a count property representing the number of exercises that belong to that user. A `GET` request to `/api/users/:_id/logs` will return the user object with a log array of all the exercises added. Each item in the log array that is returned from `GET /api/users/:_id/logs` is an object that should have a `description`, `duration`, and `date` properties.
```
{
  username: "fcc_test",
  count: 1,
  _id: "5fb5853f734231456ccb3b05",
  log: [{
    description: "test", /* String */
    duration: 60, /* Number */
    date: "Mon Jan 01 1990", /* String (dateString of Date API) */
  }]
}
```
### Tests
- [X] You can POST to /api/users with form data username to create a new user.[🔗](#post-users-request-body)
- [X] The returned response from POST /api/users with form data username will be an object with username and _id properties.[🔗](#post-users-response-body)
- [X] You can make a GET request to /api/users to get a list of all users.[🔗](#get-users-endpoint)
- [X] The GET request to /api/users returns an array.[🔗](#get-users-response-body)
- [X] Each element in the array returned from GET /api/users is an object literal containing a user's username and _id.[🔗](#get-users-response-body)
- [X] You can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.[🔗](#post-user-exercises-request-body)
- [X] The response returned from POST /api/users/:_id/exercises will be the user object with the exercise fields added.[🔗](#post-user-exercises-response-body)
- [X] You can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user.[🔗](#get-user-logs-endpoint)
- [X] A request to a user's log GET /api/users/:_id/logs returns a user object with a count property representing the number of exercises that belong to that user.[🔗](#get-user-logs-response-body)
- [X] A GET request to /api/users/:_id/logs will return the user object with a log array of all the exercises added.[🔗](#get-user-logs-response-body)
- [X] Each item in the log array that is returned from GET /api/users/:_id/logs is an object that should have a description, duration, and date properties.[🔗](#get-user-logs-response-body)
- [X] The description property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string.[🔗](#get-user-logs-response-body)
- [X] The duration property of any object in the log array that is returned from GET /api/users/:_id/logs should be a number.[🔗](#get-user-logs-response-body)
- [X] The date property of any object in the log array that is returned from GET /api/users/:_id/logs should be a string. Use the dateString format of the Date API.[🔗](#get-user-logs-response-body)
- [X] You can add from, to and limit parameters to a GET /api/users/:_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.[🔗](#get-user-logs-response-body)

SRC: https://wrighter.vercel.app/wright?id=UqJizt3Vtmv20kMFfLC78
