import userSettingsBO from '../../entity/settings/UserSettingsBO'

class FindUserSettings {
    async execute({userId}, responder) {
        try {
            const settings = await userSettingsBO.findByUserId(userId)
            responder.success(settings)
        } catch (err) {
            responder.error(err)
        }
    }
}

export default new FindUserSettings()
