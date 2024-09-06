const express = require('express')
const router = express.Router()


// read
router.get('/TodoTasks', (res, req) => {
    console.log
    return res.status(200).json({
        task: "Do all the Bootcamp tasks!!" 
    })
});

// create
router.post('/TodoTasks', (res,req) => {
    const body = req.body
    return res.status(201).json({
        message: "Task is Created"
    })
});


router.put('/TodoTasks', (res,req) => {
    const body = req.body
    return res.status(201).json({
        message: "Task is Updated"
    })
});

router.delete('/TodoTasks', (res,req) => {
    const body = req.body
    return res.status(201).json({
        message: "Task is Deleted"
    })
});

module.exports = router;