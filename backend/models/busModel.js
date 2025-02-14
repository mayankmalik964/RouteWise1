const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
    name: { type: String, required: true },
    busId: { type: String, required: true, unique: true },
    state:{
      type:String,required:true
    },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    startLocation: { type: String, required: true },
    endLocation: { type: String, required: true },
    stops: { type: [String], required: true },
    stoppageTime: { type: Number },
    passengerCount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Bus", BusSchema);
