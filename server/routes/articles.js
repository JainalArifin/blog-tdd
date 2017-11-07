const express = require('express')
const router = express.Router()
const article = require('../controller/articleController')
const aut = require('../helper/aut')

router.post('/', article.create)
router.get('/', article.all)
router.get('/:id', article.findById)
router.put('/:id', article.update)
router.delete('/:id', article.remove)

module.exports = router
