import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: false },
    description: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: false, default: Date.now }
})

export const NoteEntity = mongoose.model('Note', NoteSchema)
