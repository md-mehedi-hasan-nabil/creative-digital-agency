const UserModel = require("../models/User.model")

function findUsers() {
    return UserModel.find()
}

function findUserByProperty(key, value) {
    if (key === "_id") {
        return UserModel.findById(value);
    }

    return UserModel.findOne({ [key]: value })
}

module.exports = {
    findUsers,
    findUserByProperty
}