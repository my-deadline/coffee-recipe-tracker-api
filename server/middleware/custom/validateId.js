const { DB } = require('../../../utils');

module.exports = (tbl, param) => {
    return (req, res, next) => {
        DB.findById(tbl, req.params[param])
          .then(item => {
              if (!item) {
                  res.status(404).json({ message: `Invalid ${param}. Not found.` });
              } else {
                  next();
              };
          })
          .catch(err => res.status(500).json({ message: `There was an error finding the item using the given ${param}`, error: err.message }));
      };
};