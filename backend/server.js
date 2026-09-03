const express = require("express");
const cors = require("cors");

const alsRoutes = require("./routes/als");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "ALS backend is running"
    });
});

app.use("/api/als", alsRoutes);

app.listen(PORT, () => {
    console.log(`ALS backend running on http://localhost:${PORT}`);
});