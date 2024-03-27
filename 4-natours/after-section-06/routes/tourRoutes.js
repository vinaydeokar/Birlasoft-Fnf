const express = require('express');
const tourController = require('./../controllers/tourController'); //as we are in the 'routes' folder, we are using '..' to move one folder upwards

const router = express.Router();

router.param('id', tourController.checkID);

router  // advantage of this is we can chain 2 methods withe same routes // using 'router.' instead of 'app.'
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour); // 1st parameter is called middleware chaining

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
