import router from '@/views/routers'

class Location {
    reload() {
        setTimeout(() => window.location.reload(), 2000)
    }

    redirect(path) {
        router.push({path: path})
    }
}

export default new Location()
