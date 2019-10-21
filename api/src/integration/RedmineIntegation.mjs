import axios from 'axios'

class RedmineIntegation {
    async findProjectsByUserId (url, token) {
        const urlToSearch = `${url}/projects.json?key=${token}&limit=100`
        const {data} = await axios.get(urlToSearch)
        return data
    }
}

export default new RedmineIntegation()
