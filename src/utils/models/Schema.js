import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

export const Comment = mongoose.models.Comment || mongoose.model('Comment', commentSchema);
