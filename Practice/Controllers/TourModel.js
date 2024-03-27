const mongoose = require('mongoose');
// const slugify = require('slugify');
// const validator = require('validator');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,         //when we save the same document twice, this prperty will through error
      trim: true,           //This will remove all the spaces at the beginning and the end of the String
      maxlength: [40, 'A tour name must have less or equal then 40 characters'],//2nd parameter in the array will be shown when the 1st is wrong i.e., not 40
      minlength: [10, 'A tour name must have more or equal then 10 characters']
      // validate: [validator.isAlpha, 'Tour name must only contain characters']
    },
    slug: String,
    duration: {
      type: Number,
      required: [true, 'A tour must have a duration']  //validator
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'A tour must have a group size']
    },
    difficulty: {
      type: String,
      required: [true, 'A tour must have a difficulty'],
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium, difficult'
      }
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0']
    },
    ratingsQuantity: {
      type: Number,
      default: 0
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price']
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function(val) {
          // this only points to current doc on NEW document creation
          return val < this.price;
        },
        message: 'Discount price ({VALUE}) should be below regular price'
      }
    },
    summary: {
      type: String,
      trim: true,     
      required: [true, 'A tour must have a description']
    },
    description: {
      type: String,
      trim: true
    },
    imageCover: {
      type: String,
      required: [true, 'A tour must have a cover image']
    },
    images: [String],        //array of Strings
    createdAt: {
      type: Date,            // Date is alos just another js built-in datatype
      default: Date.now(),     // jevha tour create karel user tevhacha time- it will give a time stamp in milliseconds
      select: false           // to hide this field permanently from the output. This is used many times for PASSWORD
    },
    startDates: [Date],   //Array of Dates- here mongoDB will not automatically add date, he we pass date through js and mongo will parse it into a Date format
    secretTour: {
      type: Boolean,
      default: false
    }
  },
  {
    toJSON: { virtuals: true }, //This option specifies how the document should be transformed when it's converted to JSON
    toObject: { virtuals: true }//this option defines how the document should be transformed when converted to a plain JavaScript object.
  }
);



const Vinay = mongoose.model('Vinay', tourSchema);

module.exports = Vinay;// exporting to tourController to perform crud operations 
