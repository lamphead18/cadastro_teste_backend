const express = require("express");

const cors = require("cors")

const auth = require("./routes")

const app = express()

app.use(express.json());

app.use(cors())

app.use("/auth", auth)

app.listen(3000, () => {
    console.log("Server listening port 3000");
});