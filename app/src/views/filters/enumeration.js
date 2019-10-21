import Vue from 'vue'

Vue.filter('enumerationFilter', (value, enumObject) => {
    if (!value || !enumObject) {
        return ''
    }
    return enumObject[value]
})
