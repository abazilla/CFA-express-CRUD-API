const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient.js')

exports.getIngredients = (req, res) => {
  Ingredient.find() //mongoose syntax
  .then(ingredients => {
    res.render('index', {
      title: 'Ingredients',
      ingredients: ingredients
    })
  })
};

exports.postIngredients = (req, res) => {
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
  .then(() => {
    res.redirect('/')
  })
};

exports.getIngredientsEdit = (req, res) => {
  Ingredient.findOne({ _id: req.params.id})
  .then(ingredient => {
    res.render('editIngredient', {ingredient: ingredient});
  })
};

exports.postIngredientsEdit = (req, res) => {
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true // returns new ingredient
  })
  .then(ingredient => {
    res.redirect('/')
  })
};

exports.deleteIngredient = (req, res) => {
  Ingredient.findByIdAndRemove( req.params.id, (err, ingredient) =>  {
    res.redirect( '/' );
  });
}

// ------- JSON
exports.getIngredientsApi = (req, res) => {
  Ingredient.find() //mongoose syntax
  .then(ingredients => {
    res.json(ingredients)
  })
};

exports.postIngredientsApi = (req, res) => {
  const name = req.params.name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
  .then(() => {
    res.redirect('/api')
  })
};

exports.getIngredientApi = (req, res) => {
  Ingredient.findOne({ _id: req.params.id})
  .then(ingredient => {
    res.json(ingredient);
  })
};

exports.postIngredientEditApi = (req, res) => {
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.query, {
    new: true // returns new ingredient
  })
  .then(ingredient => {
    res.redirect(`/api/ingredient?id=${req.params.id}`)
  })
};

exports.deleteIngredientApi = (req, res) => {
  Ingredient.findByIdAndRemove( req.params.id, (err, ingredient) =>  {
    res.redirect( '/' );
  });
}
