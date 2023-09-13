const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        index: {
            unique: true
        },
        required: true
    },
    emailVerified: {
        type: Boolean,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        default: ""
    },
    role: {
        type: [String],
        default: ["user"]
    },
}, { timestamps: true });

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel

