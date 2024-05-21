
const express = require("express");
const app = express();

// The template engine to use,
// A template engine enables you to use static template files in your application.
app.set("view engine", "ejs");

// Enabled serving static contents
app.use(express.static("public"));

// This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true }));

// The express.json() function is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser. 
app.use(express.json());

// User related routes are separated in a different folder
const userRouter = require("./routes/users");
app.use("/users", userRouter);

// Binds and listens for connections on the specified host and port.
app.listen(3000);
