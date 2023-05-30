const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TenderSchema = new Schema({
    project_id: String,
    contractor_id: String, 
    Budget: String,
    timelineStart: String, 
    timelineEnd: String,
    material: String, 
    approved: Number, //0 - applied , 1 - pwd approved, 2 - govt approved
});

module.exports = mongoose.model("Tender", TenderSchema);

 


