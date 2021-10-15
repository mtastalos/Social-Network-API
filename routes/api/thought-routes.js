const router = require('express').Router();
const {
  getAllThought
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThought)
  .post()
  .put()
  .delete();


  router
  .route('/:thoughtId/reactions')
  .post()
  .delete();

module.exports = router;
