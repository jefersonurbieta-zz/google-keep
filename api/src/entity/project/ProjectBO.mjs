import { ProjectEntity } from './ProjectEntity'

class ProjectBO {
    async findByUserId (userId) {
        return ProjectEntity.findOne({ userId })
    }

    async create (project) {
        return ProjectEntity.create(project)
    }

    async update (project) {
        return ProjectEntity.updateOne({ _id: project._id }, project)
    }
}

export default new ProjectBO()
