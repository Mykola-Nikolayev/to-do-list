import mongoose, { mongo } from "mongoose";

export enum TaskStatusEnum {
    IN_PROGRESS = "in progress",
    DONE = "done",
}

export interface ITask {
    _id: string;
    description: string;
    status: TaskStatusEnum;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

const TaskSchema = new mongoose.Schema<ITask>(
    {
        description: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: [TaskStatusEnum.IN_PROGRESS, TaskStatusEnum.DONE],
            default: TaskStatusEnum.IN_PROGRESS,
            required: true
        },
        userId: {
            type: String,
            ref: 'users',
            required: true
        }
    },
    {
        timestamps: true
    }
)

const ITaskModel = mongoose.model("tasks", TaskSchema)