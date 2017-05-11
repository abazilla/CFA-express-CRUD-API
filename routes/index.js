var express = require('express');
var router = express.Router();

var middleware = require('../middleware')

router.use(middleware.myLogger)
router.use(middleware.mw)

const Ingredient = require('../models/Ingredient.js')
const ingredientController = require('../controllers/ingredientController.js')

/* GET home page. */
router.get('/', ingredientController.getIngredients);

router.post('/', ingredientController.postIngredients);

router.get('/ingredients/:id/edit', ingredientController.getIngredientsEdit);

router.post('/ingredients/:id/edit', ingredientController.postIngredientsEdit);

router.get('/ingredients/:id/destroy', ingredientController.deleteIngredient)

module.exports = router;
