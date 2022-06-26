import Payment from "./Payment.js";

class PaymentService {
    async create(payment) {
        const createdPayment = await Payment.create({...payment});
        return createdPayment;
    }

    async getAll() {
        const posts = await Payment.find();
        return posts;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const post = await Payment.findById(id);
        return post;
    }

    async update(post) {
        if (!post._id) {
            throw new Error('не указан ID')
        }
        const updatedPost = await Payment.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }

    async delete(id) {
            if (!id) {
                throw new Error('не указан ID')
            }
            const post = await Payment.findByIdAndDelete(id);
            return post;
    }
}


export default new PaymentService();
