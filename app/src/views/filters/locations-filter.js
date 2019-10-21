import Vue from 'vue'
import i18n from '@/core/i18n'

Vue.filter('locationsFilter', (locations) => {
    let locationsStr = ''
    locations.forEach((location, index) => {
        const nameUf = location.name + (location.uf ? ' - ' + location.uf : '')
        if (index < locations.length - 2)
            locationsStr += nameUf + ', '
        else if (index === locations.length - 1 && locations.length > 1)
            locationsStr += ' ' + i18n.t('general.and') + ' ' + nameUf
        else
            locationsStr += nameUf
    })
    return locationsStr
})
