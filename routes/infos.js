const express = require('express')
const router = express.Router()
const infosController = require('../controllers/infos')

router.post('/addInfos', infosController.addInfos)
