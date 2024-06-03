import mongoose from "mongoose";

const companiesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    industry: {type: String, required: true},
    location: {type: String, required: true},
    profileId: String
})

export default mongoose.model("Companies", companiesSchema)