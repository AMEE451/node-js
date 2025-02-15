const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
   title:String,
   description:String,
   releaseDate:Number,
   category:String,
   actors:[{AliaBhatt:String},
    {DeepikaPadukone:String},
    {AkhilAkinneni: String}
   ],
   ratings:[{
    value:Number,
    min:Number,
    max:Number
   }],
   comments: [{text: String}],
   addedBy: String
})

const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie
