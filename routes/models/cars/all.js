const data = require('../../../data.json');

module.exports =  function(req, res) {
  const modelId = req.params.modelId * 1 ;

  var isModelId = function(value) {
    return value.modelId===modelId;
  }
  const cars = data.cars.filter( isModelId );

  res.status(200).json(cars);
};
