import api from '@/core/apiclient'
import store from '@/core/store'

class RouterGuards {

    conditions (to, from, next) {
        if (this.isPublicPage(to)) {
            return next()
        }
        this.handlePrivatePages(to, from, next)
    }

    handlePrivatePages (to, from, next) {
        if (this.iAmNotLoggedIn()) {
            this.redirectToLogin(to, next)
        } else if (!this.hasAuthorities(to)) {
            this.redirectToHomePage(next)
        } else {
            next()
        }
    }

    hasAuthorities (to) {
        const requiresAuthorities = to.meta && to.meta.authorities && to.meta.authorities.length
        if (!requiresAuthorities) {
            return true
        }
        const required = to.meta.authorities
        const userAuthorities = store.state.loggedUser.authorities
        let hasAuthorities = false
        for (let req of required) {
            const auth = userAuthorities.find(auth => auth.name === req)
            if (auth && auth.hasAccess) {
                hasAuthorities = true
                break
            }
        }
        return hasAuthorities
    }

    isPublicPage (to) {
        return !to.matched.some(record => record.meta.requiresAuth)
    }

    iAmNotLoggedIn () {
        return !api.tokenApiClient.existToken()
    }

    redirectToLogin (to, next) {
        next({ name: 'login', params: to.params, query: to.query })
    }

    redirectToHomePage (next) {
        next({ name: 'home' })
    }
}

export default new RouterGuards()

