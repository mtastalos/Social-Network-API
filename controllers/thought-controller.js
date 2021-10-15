const { Thought } = require('../models');

const thoughtController = {
  getAllThought(req, res) {
    Thought.find({})
      // .select('-__v')
      // .sort({ _id: -1 })
      .then(data => res.json(data))
      .catch(err => {res.sendStatus(400);});
  },

  getThoughtById({params}, res) {
    Thought.findOne({_id: params.id})
    .then(data => res.json(data))
    .catch(err => {res.sendStatus(400);});
  },

  createThought({body}, res){
    Thought.create(body)
    .then(data => {data})
    .catch(err => res.json(err));
  },

  updateThought({params, body}, res){
    Thought.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
    .then(data => res.json(data))
    .catch(err => {res.sendStatus(400);});
  },

  deleteThought({params}, res){
    Thought.findOneAndDelete({_id: params.id})
    .then(data => res.json(data))
    .catch(err => {res.sendStatus(400);});
  },

  //reaction controls
  addReaction({params, body}, res){
    Thought.findOneAndUpdate(
      {_id: params.thoughtId},
      {$push: {reactions: body}},
      {new: true, runValidators: true}
    )
    .then(data => res.json(data))
    .catch(err => {res.sendStatus(400);});
  },

  deleteReaction({params}, res){
    Thought.findOneAndUpdate(
      {_id: params.friendId},
      {$pull: {reactions: params.friendId}},
      {new: true, runValidators: true}
    )
    .then(data => res.json(data))
    .catch(err => {res.sendStatus(400);});
  }
};

module.exports = thoughtController;
