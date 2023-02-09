const express = require('express');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');
const contractsController = require('../../controllers/contracts.controller');

const router = express.Router();

router.post('/getContracts', contractsController.getContracts);

module.exports = router;
