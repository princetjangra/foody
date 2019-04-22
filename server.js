const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/public_static"));

app.listen(3000, () => console.log("server at http://localhost:3000"));
