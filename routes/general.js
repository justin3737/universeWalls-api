const express = require('express')
const router = express.Router()
const { appError } = require('../utils/errorHandler')

router.get('/', (req, res, next) => {
    /**
    *  #swagger.tags = ['Generals']
    */
    res.render('index', { title: 'Express' });
})

/* temp callback */
router.get('/oauth', (req, res, next) => {
    /**
    *  #swagger.tags = ['Generals']
    */
    res.status(200)
        .json({
            status: 'success',
            message: 'Login via google successfully'
        })
})

router.get('*', (req, res, next) => {
    /**
    *  #swagger.tags = ['Generals']
    */
    next(appError(404, "", 'Invalid Route', next))
})

module.exports = router