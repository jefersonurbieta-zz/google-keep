import mongoose from 'mongoose'

const RedmineIntegrationSchema = new mongoose.Schema({
    url: { type: String, required: false },
    token: { type: String, required: false }
})

const UserSettingsSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    redmineIntegration: RedmineIntegrationSchema,
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: false, default: Date.now }
})

export const UserSettingsEntity = mongoose.model('UserSettings', UserSettingsSchema)
