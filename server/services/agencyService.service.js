const ServicesModel = require("../models/Service.model")

function findServices() {
    return ServicesModel.find()
}

function findServiceByProperty(key, value) {
    if (key === "_id") {
        return ServicesModel.findById(value);
    }

    return ServicesModel.findOne({ [key]: value })
}

function createNewService({ title, description, image, email }) {
    const newService = new ServicesModel({ title, description, image, email });
    return newService.save();
}

function updateService({ title, description, serviceId }) {
    const service = ServicesModel.findOneAndUpdate({ _id: serviceId }, { title, description }, { new: true })
    return service
}

function deleteService(serviceId) {
    return ServicesModel.findByIdAndDelete(serviceId)
}

module.exports = {
    findServices,
    findServiceByProperty,
    createNewService,
    updateService,
    deleteService
}