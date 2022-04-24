import express from 'express';
import controller from '../controllers/Userstatus'

const router = express.Router();

router.get('/Userstatus', controller.getAll);
router.post('/Userstatus', controller.create);
router.patch('/Userstatus/:id', controller.update);
router.delete('/Userstatus/:id', controller.remove);
router.get('/Userstatus/:id', controller.get);

export = router;