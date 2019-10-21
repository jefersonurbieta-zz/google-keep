import { UserSettingsEntity } from './UserSettingsEntity'

class UserSettingsBO {
    async findByUserId (userId) {
        return UserSettingsEntity.findOne({ userId })
    }

    async create (userSettings) {
        return UserSettingsEntity.create(userSettings)
    }

    async update (userSettings) {
        return UserSettingsEntity.updateOne({ _id: userSettings._id }, userSettings)
    }
}

export default new UserSettingsBO()
