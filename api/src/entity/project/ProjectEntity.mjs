import mongoose from 'mongoose'

const IntegrationSchema = new mongoose.Schema({
    identifier: { type: String, required: false }
})

const ProjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    integration: IntegrationSchema,
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: false, default: Date.now }
})

export const ProjectEntity = mongoose.model('Project', ProjectSchema)
