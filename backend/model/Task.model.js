import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    createdBy: {
        type: String,
        default: 'anonymous'
    },
    description: {
        type: String,
        default: 'no task description'
    },
    priority: {
        type: String,
        default: 'low'
    },
    status: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: String,
        default: "no deadline"
    }
}, { timestamps: true });

export const task = mongoose.model("task", TaskSchema);
