import PaymentService from "./PaymentService.js";

class PaymentController {
    async create(req, res) {
        try {
            const payment = await PaymentService.create(req.body)
            res.json({
                "RequestId": payment._id,
                "Amount": payment.Amount
            })
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PaymentService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const post = await PaymentService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await PaymentService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await PaymentService.delete(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


export default new PaymentController();
