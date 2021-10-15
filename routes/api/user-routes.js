const router = require('express').Router();
const {
  getAllUser,
} = require('../../controllers/user-controller');

router
  .route('/')
  .get(getAllUser)
  .post()
  .put()
  .delete();

router
  .route('/:userId/friends/:friendId')
  .get()
  .put()
  .delete();

module.exports = router;
