const { User } = require('../models');

const UserController = {
  getAllUser(req, res) {
    User.find({})
      // .select('-__v')
      // .sort({ _id: -1 })
      .then(data => res.json(data))
      .catch(err => {res.sendStatus(400);});
  },

  getUserById({params}, res) {
    User.findOne({_id: params.id})
    .populate(
      {path: 'thoughts', path: 'friends'}
    )
    .then(data => res.json(data))
    .catch(err => {res.sendStatus(400);});
  },

  createUser({body}, res){
    User.create(body)
    .then(data => {data})
    .catch(err => res.json(err));
  },

  updateUser({params, body}, res){
    User.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
    .then(data => res.json(data))
    .catch(err => {res.sendStatus(400);});
  },

  deleteUser({params}, res){
    User.findOneAndDelete({_id: params.id})
    .then(data => res.json(data))
    .catch(err => {res.sendStatus(400);});
  },

  //friend controls
  addFriend({params}, res){
    User.findOneAndUpdate(
      {_id: params.userId},
      {$push: {friends: params.friendId}},
      {new: true, runValidators: true}
    )
    .then(data => res.json(data))
    .catch(err => {res.sendStatus(400);});
  },

  deleteFriend({params}, res){
    User.findOneAndUpdate(
      {_id: params.friendId},
      {$pull: {friends: params.friendId}},
      {new: true, runValidators: true}
    )
    .then(data => res.json(data))
    .catch(err => {res.sendStatus(400);});
  }
};

module.exports = UserController;
