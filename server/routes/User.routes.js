const express = require("express");
const { getUsers, getUser, editUserInfo,
    handleAuth, changeProfile
} = require("../controllers/User.controller");
const upload = require("../middlewares/imageUpload");
const router = express.Router();


router.get("/", getUsers);
router.get("/:userId", getUser);
router.post("/auth", handleAuth);
// router.post("/login", login);
// router.post("/register", createNewUser);
router.patch("/edit-user/:userId", editUserInfo);
router.patch("/change-profile/:userId", upload.single("profile"), changeProfile);
// router.post("/", upload.single("profile"), imageUpload);

module.exports = router;
