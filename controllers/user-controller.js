const { User } = require('../models');

const UserController = {
  getAllUser(req, res) {
    User.find({})
      // .select('-__v')
      // .sort({ _id: -1 })
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
};

module.exports = UserController;
