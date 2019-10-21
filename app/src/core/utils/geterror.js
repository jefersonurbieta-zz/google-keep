export default (error) => {
    return (error && error.response && error.response.data && error.response.data.message) ? error.response.data.message : ''
}
