const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3030
app.use(express.json())

app.use('To')


app.listen(PORT, () => {
    console.log(`App is listening ${PORT}`);
})