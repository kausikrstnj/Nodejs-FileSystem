const express = require("express");
const app = express();
const port = 3000;

// Define a route for GET requests to the root URL ("/")
app.get("/", (req, res) => {
    res.send(
        "Hello GUVI!!,I'm Kausik !!!"
    );
});

app.get("/home", (req, res) => {
    res.send("Hello GUVI! \n Welcome to HOME.");
});

app.get("/dashboard", (req, res) => {
    res.send("Hello GUVI! \n Welcome to DASHBOARD.");
});

// Start the server on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});
