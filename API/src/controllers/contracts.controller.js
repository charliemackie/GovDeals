const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { contractsService } = require('../services');

const getContracts = catchAsync(async (req, res) => {
  console.log(req.body)
  const contractsList = await contractsService.getContracts(req.body);
  res.status(httpStatus.CREATED).send(contractsList);
});

module.exports = {
  getContracts
};
