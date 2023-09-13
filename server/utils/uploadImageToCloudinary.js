const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const options = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto"
}

/**
 * 
 * @param {image => base64} image 
 * @returns upload image url
 */
module.exports = function (image) {
    return new Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(image,
            options,
            function (error, result) {
                if (result && result.secure_url) {
                    console.log(result);
                    return resolve(result.secure_url)
                }

                return reject(error)
            });
    })
}