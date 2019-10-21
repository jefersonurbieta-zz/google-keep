import userSettingsBO from '../../../entity/settings/UserSettingsBO'
import redmineIntegation from '../../../integration/RedmineIntegation'

class FindReadmineProjects {
    async execute({userId}, responder) {
        try {
            const userSettings = await userSettingsBO.findByUserId(userId)
            this.validateExistenceRedmineURL(userSettings)
            this.validateExistenceRedmineToken(userSettings)
            const projects = await redmineIntegation.findProjects(userSettings.redmineIntegration.url, userSettings.redmineIntegration.token)
            responder.success(projects)
        } catch (err) {
            responder.error(err)
        }
    }

    validateExistenceRedmineURL (userSettings) {
        if(!userSettings.redmineIntegration || !userSettings.redmineIntegration.url) {
            throw new Error('Redmine URL not configured')
        }
    }

    validateExistenceRedmineToken (userSettings) {
        if(!userSettings.redmineIntegration || !userSettings.redmineIntegration.token) {
            throw new Error('Redmine token not configured')
        }
    }
}

export default new FindReadmineProjects()
