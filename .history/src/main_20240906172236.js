const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3030
app.listen(3030, () => {
    console.log("App is listening");
})