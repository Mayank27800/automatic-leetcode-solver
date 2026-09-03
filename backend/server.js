const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "ALS backend is running"
    });
});

app.listen(PORT, () => {
    console.log(`ALS backend running on http://localhost:${PORT}`);
});