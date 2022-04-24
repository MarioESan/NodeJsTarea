import express from 'express';
import controller from '../controllers/products'

const router = express.Router();

router.get('/product', controller.getAll);
router.post('/product', controller.create);
router.patch('/product/:id', controller.update);
router.delete('/product/:id', controller.remove);
router.get('/product/:id', controller.get);

export = router;