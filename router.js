import Router from 'express'
import PaymentController from "./PaymentController.js";

const router = new Router()

router.post('/payments', PaymentController.create)
router.get('/payments', PaymentController.getAll)
router.get('/payments/:id', PaymentController.getOne)
router.put('/payments', PaymentController.update)
router.delete('/payments/:id', PaymentController.delete)

export default router;
