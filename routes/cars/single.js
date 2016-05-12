const data = require('../../data.json');

module.exports = function(req,res) {
  const carId = req.params.carId * 1;

  var isCarId = function(value){
    return value.id===carId;
  }

  const car = data.cars.filter( isCarId );

  res.status(200).json( car );
};
