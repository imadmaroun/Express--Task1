const express = require('express')
const router = express.Router()


// read
router.get('/TodoTasks', (req, req) => {
    console.log('Received Response')
    return res.status(200).json({
        task: "Do all the Bootcamp tasks!!" 
    })
});

// create
router.post('/TodoTasks', (req,req) => {
    const body = req.body
    return res.status(201).json({
        message: "Task is Created"
    })
});


router.put('/TodoTasks', (req,req) => {
    const body = req.body
    return res.status(201).json({
        message: "Task is Updated"
    })
});

router.delete('/TodoTasks', (req,req) => {
    const body = req.body
    return res.status(201).json({
        message: "Task is Deleted"
    })
});

module.exports = router;