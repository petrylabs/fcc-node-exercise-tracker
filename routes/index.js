const path = require('path');
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    const absolutePath = path.join(__dirname, '../views/index.html');
    console.log('lol...123');
    res.sendFile(absolutePath);
});

module.exports = router;
