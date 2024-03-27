const Vinay = require('./TourModel');
const mongoose = require('mongoose');
const APIFeatures = require('./../utils/apiFeatures');
const express = require('express');
app= express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Vinay', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.get('/getAll', async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Vinay.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const tours = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
});

app.get( '/:id', async (req, res) => {
  try {
    const tour = await Vinay.findById(req.params.id);
    // Tour.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
});

app.get('/', (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      results: 5,
      data: 'Hi, Vinay this side'
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
});

app.post('/create', async (req, res) => {
  try {
    // const newTour = new Tour({})       //regular way
    // newTour.save()

    const newTour = await Vinay.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
});

app.patch('/:id', async (req, res) => {
  try {
    const tour = await Vinay.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
});

app.delete('/:id', async (req, res) => {
  try {
    await Vinay.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
});

app.listen(3000,()=>{
    console.log('successfull connection');
});