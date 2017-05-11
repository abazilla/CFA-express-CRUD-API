var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredient.js')
const ingredientController = require('../controllers/ingredientController.js')

// JSON
router.get('/', ingredientController.getIngredientsApi)

router.post('/', ingredientController.postIngredientsApi);

router.get('/ingredient/:id', ingredientController.getIngredientApi);

router.post('/ingredient/:id', ingredientController.postIngredientEditApi);

router.delete('/ingredient/:id', ingredientController.deleteIngredientApi)

module.exports = router;
