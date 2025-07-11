const mongoose = require("mongoose"); 

const orderSchema = mongoose.Schema({
  
    amount: {type: Number}, 
    rest: {type: Number}, 
    rest2: {type: Number},
    recoveries: {type: Array},
    agent_id: {type: String}, 
    rec_id: {type: String}, 
    agg_id: {type: String}, 
    type: {type: String}, 
    date: {type: Date}, 
    status: {type: String}, 
    read: {type: Boolean}, 
    phone: {type: String}, 
    message: {type: String},   
    trans_id: {type: String}
  
})

orderSchema.index({ trans_id: 1 }, { unique: true }); 

module.exports = mongoose.model("Order", orderSchema);