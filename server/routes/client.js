const express =  require('express')
const path =  require('path')
const fs =  require('fs')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('I am from the backend')
})

module.exports = router