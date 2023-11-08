const express = require('express')
const router = express.Router()
const customer = require('../controller/CustomerController')


router.route('/')
.post(customer.createCustomer)
.get(customer.getAllUser)


router.route('/:id')
.get(customer.getUserById)


module.exports = router