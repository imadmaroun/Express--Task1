const express = requier('express')
const router = express.Router()


// read
router.get('/TodoTasks', (res, req) => {
    return res.status(200).json({
        task: "Do all the Bootcamp tasks!!" 
    })
});

router