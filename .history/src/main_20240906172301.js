const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3030

app.listen(PORT, () => {
    console.log(`App is listening `);
})