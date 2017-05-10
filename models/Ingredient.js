const mongoose = require('mongoose');
// The same as const Schema = mongoose.Schema (below is called destructuring)
const { Schema } = mongoose;

const ingredientSchema = new Schema({
  name: {
    type: String,
    trim: true
  }, //gets rid of whitespace
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;
