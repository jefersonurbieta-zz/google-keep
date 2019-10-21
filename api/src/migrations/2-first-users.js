module.exports.id = 'FIRST-USERS'

module.exports.up = async function (done) {
    this.log('Running the script ' + module.exports.id)

    const usersCollection = this.db.collection('users')

    const data = [
        {
            'name': 'Administrador',
            'email': 'admin',
            'password': '$2b$10$Uj3NqIkF3zj28uqEYrh1Ou2WA9RVFk7.PpbWzsSi/PTJ0ARVTlbH.',
            'source': 'admin',
            'isAdmin': true,
            'createdAt': new Date()
        }
    ]

    usersCollection.insert(data, done)
}

module.exports.down = function (done) {
    done()
}
