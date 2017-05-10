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

exports.getIngredientsPost = (req, res) => {
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

exports.getIngredientsEditPost = (req, res) => {
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true // returns new ingredient
  })
  .then(ingredient => {
    res.redirect('/')
  })
};

exports.getIngredientsDelete = (req, res) => {
  Ingredient.findByIdAndRemove( req.params.id, (err, ingredient) =>  {
      res.redirect( '/' );
    });
}

exports.getApi = (req, res) => {
  Ingredient.find()
    .then( () => {
      res.json();
    })
}
