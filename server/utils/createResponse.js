function error(message) {
    return {
        success: false,
        error: true,
        message
    }
}

function success(message, data) {
    return {
        success: true,
        error: false,
        message,
        data
    }
}
module.exports = {
    success, error
}