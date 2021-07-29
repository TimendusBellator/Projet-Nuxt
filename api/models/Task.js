const {Schema, model} = require('mongoose')

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  }, 
  priority: {
    type: String,
    required: false  
  },
  deadline: {
    type: Date,
    required: false
  }
},
{
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = model('task', TaskSchema)