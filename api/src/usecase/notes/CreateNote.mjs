import noteBO from '../../entity/note/NoteBO'

class CreateNote {
    async execute({userId, note}, responder) {
        try {
            const formattedInput = this.formatNote(note, userId)
            const noteCreted = await noteBO.create(formattedInput)
            responder.success(noteCreted)
        } catch (e) {
            responder.error(e)
        }
    }

    formatNote(input, userId) {
        console.log(input)
        const note = {}
        note.title = input.title
        note.description = input.description
        note.user = userId
        return note
    }
}

export default new CreateNote()
