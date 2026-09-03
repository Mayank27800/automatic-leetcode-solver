const express = require("express");

const router = express.Router();

router.post("/start", (req, res) => {
    console.log("ALS start request received");

    res.json({
        success: true,
        message: "ALS started"
    });
});

module.exports = router;