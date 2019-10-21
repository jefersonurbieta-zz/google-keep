import noteBO from '../../entity/note/NoteBO'

class FindNotes {
    async execute({userId}, responder) {
        try {
            const notes = await noteBO.findByUserId(userId)
            responder.success(notes)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new FindNotes()
