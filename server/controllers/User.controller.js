const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const UserModel = require("../models/User.model");
const createResponse = require("../utils/createResponse");
const userService = require('../services/auth.service');


// get all user
async function getUsers(req, res, next) {
    /**
     * TODO: filter, sort, pagination
     */
    try {
        const users = await userService.findUsers()

        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}


// get user by user id
async function getUser(req, res, next) {
    try {
        const { userId } = req.params || {};

        const user = await userService.findUserByProperty('_id', userId);

        res.status(200).json(user);

    } catch (error) {
        next(error);
    }
}

// login user
// async function login(req, res, next) {
//     try {
//         const { email, password } = req.body || {};

//         // find user
//         const user = await userService.findUserByProperty("email", email);

//         // if user not found
//         if (!user?._id) {
//             return res.status(400).json({
//                 error: 'User not found!!',
//             });
//         }

//         bcrypt.compare(password, user?.password, function (err, result) {
//             if (err) {
//                 return res.status(500).json({ error: err });
//             }

//             // password doest not match
//             if (!result) {
//                 return res.status(400).json({
//                     success: false,
//                     error: {
//                         message: "Email or Password Doest not match. Please try again."
//                     }
//                 });
//             }

//             // generate user object for response
//             const userObject = {
//                 userId: user._id,
//                 name: user.username,
//                 email: user.email,
//                 profile: user?.profile,
//                 role: user?.role,
//             };

//             // generate token
//             const token = jwt.sign(userObject, process.env.JWT_SECRET, {
//                 expiresIn: process.env.JWT_EXPIRY,
//             });

//             // send response
//             res.status(200).json(createResponse.success("Login successfull", {
//                 token: `Bearer ${token}`,
//                 payload: userObject
//             }));
//         });


//     } catch (error) {
//         next(error)
//     }
// }

// // create new user
// async function createNewUser(req, res, next) {
//     try {
//         const { displayName, email, phoneNumber, photoURL, emailVerified } = req.body || {};

//         const existingUser = await UserModel.findOne({
//             email
//         })

//         if (!existingUser?.email) {

//             const newUser = UserModel({
//                 displayName, email, phoneNumber, photoURL, emailVerified
//             })

//             await newUser.save()

//             res.status(201).json(Response.success("User create successful", newUser))
//         } else {
//             res.status(409).json(createResponse.error("User email already exists!"))
//         }

//     } catch (error) {
//         // console.log(error)
//         next(error)
//     }
// }

async function handleAuth(req, res, next) {
    try {
        const { displayName, email, phoneNumber, photoURL, emailVerified } = req.body || {};

        const existingUser = await UserModel.findOne({
            email
        })

        if (!existingUser?.email) {

            const newUser = UserModel({
                displayName, email, phoneNumber, photoURL, emailVerified
            })

            await newUser.save()

            res.status(201).json(Response.success("User create successful", newUser))
        } else {
            res.status(409).json(createResponse.success("User email already exists!", existingUser))
        }

    } catch (error) {
        // console.log(error)
        next(error)
    }
}

// change user information
async function editUserInfo(req, res, next) {
    try {
        const { userId } = req.params || {};

        const { username, phone, verified, gender, profile, role } = req.body || {};

        const user = await UserModel.findById(userId);

        if (user) {
            const updateDocument = await UserModel.findByIdAndUpdate({ _id: userId }, { username, phone, verified, gender, profile, role }, { new: true });

            res.status(201).json(createResponse.success("Information update successful", updateDocument))
        } else {
            res.status(404).json(createResponse.error("User is not found"))
        }
    } catch (error) {
        next(error)
    }
}

async function changeProfile(req, res, next) {
    try {
        console.log(req.file);

        res.status(201).json(req.file)
    } catch (error) {
        next(error)
    }
}

// const sanitization = [
//     check("username")
//         .isLength({ min: 5 })
//         .withMessage("Usrname must be at least 5 chars long")
//         .trim(),
//     check("email")
//         .normalizeEmail()
//         .isEmail()
//         .withMessage("Email is not valid")
//         .trim()
//         //   .custom(async (value) => {
//         //     try {
//         //       const user = await RegisterUser.findOne({ email: value });
//         //       if (user) {
//         //         throw createError("Email is already use");
//         //       }
//         //     } catch (error) {
//         //       throw createError(error.message);
//         //     }
//         //   })
//         .withMessage("Email already use"),
//     check("password")
//         .trim()
//         .isLength({ min: 5 })
//         .withMessage("Password min length in 5"),
//     check("confirmPassword").custom((value, { req }) => {
//         if (value !== req.body.password) {
//             throw new Error("Password confirmation is incorrect");
//         }
//         return true;
//     }),
//     check("mobile")
//         .isMobilePhone("bn-BD")
//         .withMessage("Use valid bd number")
//         // .custom(async (value) => {
//         //     try {
//         //         const user = await RegisterUser.findOne({ mobile: value });
//         //         if (user) {
//         //             throw createError("Phone number is already use");
//         //         }
//         //     } catch (error) {
//         //         throw createError(error.message);
//         //     }
//         // }),
//         .check("birthday").isISO8601().toDate().withMessage("birthday is required"),
//     check("gender").isLength({ min: 4 }).withMessage("Gender is required").trim(),
// ];


module.exports = Object.freeze({
    getUsers,
    getUser,
    // createNewUser,
    // login,
    handleAuth,
    editUserInfo,
    changeProfile
})