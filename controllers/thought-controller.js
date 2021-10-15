const { Thought } = require('../models');

const thoughtController = {
  getAllThought(req, res) {
    Thought.find({})
      .then(data => res.json(data))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },
};

module.exports = thoughtController;
