let mongoose = require("mongoose");
let dbVote,
    modelName = "vote_dao";

mongoose.Promise = global.Promise; 

dbVote = mongoose.connection;

dbVote
  .on("error", (err)=> {
    console.log(">>>>>> VoteDataBase Connect Error !!! <<<<<<")
    console.log(">>>>>>>>\n %s",err);
  })
  .once("open" , ()=> {
    console.log(">>>>>> VoteDataBase Connect Successfully !!! <<<<<<");
  })

let schemaVote = mongoose.Schema({
  index: {
    type: Number,
  },

  hasVote: {
    type: Object,
    default: {}
  }
})

let modelVote = mongoose.model(modelName, schemaVote);

module.exports = {
    dbVote,
    schemaVote,
    modelVote,
    mongoose
}