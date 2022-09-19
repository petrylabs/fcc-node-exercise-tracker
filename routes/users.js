const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/userController");
const user_exercises_controller = require("../controllers/userExerciseController");
const user_log_controller = require("../controllers/userLogController");

// Handle view all users get request
router.get("/", user_controller.user_list_get);

// Handle create new user post request
router.post("/", user_controller.user_create_post);

// Handle create new exercise post request
router.post("/:id/exercises", user_exercises_controller.user_exercise_create_post);

// Handle list user exercise log get request
router.get("/:id/logs", user_log_controller.user_log_list_get);

// Handle list user exercise  get request
router.get("/exercises", user_exercises_controller.user_exercise_list_get);

// Handle list user exercise log get request
router.get("/:id/exercises", user_log_controller.user_log_list_get);

module.exports = router;