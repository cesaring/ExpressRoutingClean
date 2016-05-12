const data = require('../data.json');

module.exports = function(type) {
  return function(req, res, next, value) {
    const typePlural = type + 's';

    var isId = function(t) {
      return t.id === value * 1;
    }

    const obj = data[typePlural].filter( isId );

    if (obj.length>0) {
      req[type] = obj;
      next();
    } else {
      res.status(404).send('Invalid ' + type + ' ID');
    }
  };
};
