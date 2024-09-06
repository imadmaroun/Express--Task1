const express = require("express");
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3030
const TodoTasks = require('./Routes/TodoTasks')
app.use(express.json())

app.use(TodoTasks)


app.listen(PORT, () => {
    console.log(`App is listening ${PORT}`);
})