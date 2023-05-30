const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tender = require("./tender").schema;

const UserSchema = new Schema({
    name: String,
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: String,
    confirmed: {
        type: Number,
    },
    
    //for contractor profile 
    company: String,
    industry: String, 
    contact_info: String,
    past_projects: String,  // in place of bio 
    branch_addr_line: String, //in place of address
    city: String,
    state: String,
    country: String,
    annual_report: String, //In place of resume 
    photo: String, 
    my_projects: [{type: tender}],

});

module.exports = mongoose.model("User", UserSchema);




