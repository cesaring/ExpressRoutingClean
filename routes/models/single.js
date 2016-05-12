const data = require('../../data.json');

module.exports = function(req, res) {
  const modelId = req.params.modelId * 1 // -1 // * 1;
  const myModels = data.models;

    console.log('requesting modelId: ' + modelId);
    var isId = function(value) {
      console.log('value.id=' + value.id);
      return value.id===modelId;
    }

  const newmodels = myModels.filter( isId );
  res.status(200).json( newmodels);
}
