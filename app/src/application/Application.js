import register from './engine/Register'
import triggerEvents from './engine/TriggerEvent'
import rootPageCreator from './engine/RootPageCreator'

export default class Application {

    static run() {
        register.registerAll()

        triggerEvents.triggerOnStartEvents()
            .then(() => {
                console.log('All events have been resolved.')
                rootPageCreator.createInstance()
            })
            .catch(() => {
                console.log('An initialization error has occurred')
                rootPageCreator.createBootstrapError()
            })
    }

}
