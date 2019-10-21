export default {
    methods: {
        buildListEnum(enumeration) {
            const enumValues = []
            const keys = Object.keys(enumeration)
            keys.forEach(key => {enumValues.push({value: key, text: enumeration[key]})})
            return enumValues
        }
    }
}
