import userSettingsBO from '../../entity/settings/UserSettingsBO'

class SaveUserSettings {
    async execute({userSettings}, responder) {
        try {
            const userSettingsUpdated = await userSettingsBO.update(userSettings)
            responder.success(userSettingsUpdated)
        } catch (e) {
            responder.error(e)
        }
    }
}

export default new SaveUserSettings()
