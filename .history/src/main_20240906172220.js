const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.en
app.listen(3030, () => {
    console.log("App is listening");
})