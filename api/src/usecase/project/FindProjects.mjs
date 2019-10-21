import projectBO from '../../entity/project/ProjectBO'

class FindProjects {
    async execute({userId}, responder) {
        try {
            const projects = await projectBO.findByUserId(userId)
            responder.success(projects)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new FindProjects()
