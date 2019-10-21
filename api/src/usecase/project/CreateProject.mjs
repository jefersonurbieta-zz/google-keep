import projectBO from '../../entity/project/ProjectBO'

class CreateProject {
    async execute({project}, responder) {
        try {
            const projectCreted = await projectBO.create(project)
            responder.success(projectCreted)
        } catch (e) {
            responder.error(e)
        }
    }
}

export default new CreateProject()
