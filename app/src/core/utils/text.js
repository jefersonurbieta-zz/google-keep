export default class TextUtils {
    static removeSpecialCharacters(str) {
        return str.replace(/[^\w]/gi, '')
    }
}