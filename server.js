const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static("public"));

// Dynamic API
app.get("/api/time", (req, res) => {
    res.json({
        message: "Hello from server 👋",
        time: new Date()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
