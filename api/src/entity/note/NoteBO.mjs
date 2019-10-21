import { NoteEntity } from './NoteEntity'

class NoteBO {
    async findByUserId (user) {
        return NoteEntity.find({ user })
    }

    async create (note) {
        return NoteEntity.create(note)
    }

    async update (note) {
        return NoteEntity.updateOne({ _id: note._id }, note)
    }
}

export default new NoteBO()
