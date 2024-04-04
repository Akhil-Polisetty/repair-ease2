import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    rname : String,
    rdesc : String,
    rlocation : String,
    rappliance : String,
    rmodel : String,
    raddress : String
    
})

export default mongoose.models.Repair || mongoose.model("Repair", UserSchema);
