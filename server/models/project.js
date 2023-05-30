const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tender = require("./tender").schema;

const ProjectSchema = new Schema({
    name: String, //display
    prjStartDate: String, //display
    prjEndDate: String,
    tenderStartDate: String,
    tenderEndDate: String, //display
    expBudget: String, //display
    location: String,  
    details: String,
    link: String,   
    final_tender: {type: tender}, 
    tenders: [{type: tender}],
    status: Number, //0 - project is active(contractor,all, nobody can lock)  
                    //1 - project is closed(only pwd can lock tenders and change to 2)   
                    //2 - pwd cannot lock tenders further, govt have access now  ... happens when pwd lock one tender up
                    //3 - change 2 to 3 by govt and final tender is visible to all 
                    //Note : if govt rejects then 2 to 1
});

module.exports = mongoose.model("Project", ProjectSchema);




