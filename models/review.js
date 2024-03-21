const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema (
    {
        comment : String ,
        rating: {
            type : Number,
            min:1,
            max:5,
        },
    createdAt: {
        type :Date, 
        dafault :Date.now()
    },
    author:{
        type: Schema.Types.ObjectId, ref: 'User' ,
     },
    }
)


// Register the Review model
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review ;
// Now you can use the Review model in your code
