const admin = require("firebase-admin");

const serviceAccount = require("../firebase/firebase-adminsdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

async function verifyIDToken(req, res, next) {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
        res.status(401);
        return next("unauthorized access");
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        console.log(decodedToken)
        req.user = decodedToken;
        next();
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = verifyIDToken