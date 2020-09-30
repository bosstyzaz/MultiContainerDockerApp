const mongoose = require('mongoose')

const Schema = mongoose.Schema

const formSchema = new Schema({
  name: String,
  score: Number,
})

const FormModel = mongoose.model('Form', formSchema)

module.exports = FormModel