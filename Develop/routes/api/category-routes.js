const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
const data =await Category.findAll({})
res.json(data)
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(category);
    
});

router.post('/', async(req, res) => {
  // create a new category

  const newCategory = await Category.create({
    category_name: req.body.category_name,
  });
  res.status(200).json(newCategory);
});

router.put('/:id', async(req, res) => { 
  // update a category by its `id` value

    const updatedCategory = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updatedCategory);
 
  }
);

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
