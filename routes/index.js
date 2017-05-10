var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient.js')
const ingredientController = require('../controllers/ingredientController.js')

/* GET home page. */
router.get('/', ingredientController.getIngredients);

router.post('/', ingredientController.getIngredientsPost);

router.get('/ingredients/:id/edit', ingredientController.getIngredientsEdit);

router.post('/ingredients/:id/edit', ingredientController.getIngredientsEditPost);

router.get('/ingredients/:id/destroy', ingredientController.getIngredientsDelete)

router.get('/api', ingredientController.getApi)

module.exports = router;
