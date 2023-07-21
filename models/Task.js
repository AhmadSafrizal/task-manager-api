const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, 'nama harus ada'],
    trim:true,
    maxlength:[30, 'nama tidak boleh lebih dari 30 karakter'],
  },
  completed:{
    type:Boolean,
    default:false,
  },
})

module.exports = mongoose.model(
  'Task',
  TaskSchema
)
