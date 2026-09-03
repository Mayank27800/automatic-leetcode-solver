const express = require("express");

const { startALS } = require("../services/als/als.service");

const router = express.Router();

router.post("/start", async (req, res) => {
    console.log("ALS start request received");

    try {
        const result = await startALS();

        res.json(result);
    } catch (error) {
        console.error("ALS engine error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to start ALS"
        });
    }
});

module.exports = router;