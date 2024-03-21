const mongoose = require('mongoose');
const Review = require("./review.js")
const User = require("./user.js")
const Schema = mongoose.Schema
// Define schema for the listing collection
const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    
  },
  image: {
    url: String,
      
   
    filename: 
      String,
     
    
  },
  price: {
    type: Number,
    
  },
  location: {
    type: String,
   
  },
  country: {
    type: String,
   
  },
   reviews :[{ type: Schema.Types.ObjectId, ref: 'Review' }],
owner:{
   type: Schema.Types.ObjectId, ref: 'User' ,
},
geometry: {
  type: {
      type: String , // Don't do '{ location: { type: String } }
      enum: ["Point"], // 'location.type' must be 'Pointâ
      required: true
  },
  coordinates: {
      type: [Number],
      required: true
  }
}


});

// deleting Middleware


listingSchema.post("findOneAndDelete", async (listing) =>{
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});



// Create a model from the schema
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
