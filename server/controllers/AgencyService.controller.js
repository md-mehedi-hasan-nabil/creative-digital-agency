const createResponse = require("../utils/createResponse")
const agencyService = require("../services/agencyService.service");

// gey all services
async function getServices(req, res, next) {
  try {
    const services = await agencyService.findServices();
    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
}

// get service by id
async function getServiceById(req, res, next) {
  try {
    const serviceId = req.params["serviceId"];
    const service = await agencyService.findServiceByProperty("_id", serviceId)

    res.status(200).json(service);
  } catch (error) {
    next(error);
  }
}

// add service

async function addService(req, res, next) {
  try {
    const { title, description, image } = req.body || {}
    const email = req?.user?.email

    const service = await agencyService.createNewService({ title, description, image, email })

    res.status(201).json(createResponse.success("New service create successfull", service));

  } catch (error) {
    next(error);
  }
}

// update service

async function editService(req, res, next) {
  try {
    const { serviceId } = req.params || {};
    const { title, description } = req.body || {}

    const service = await agencyService.updateService({ title, description, serviceId })

    res.status(201).json(createResponse.success("Service update successful", service));

  } catch (error) {
    next(error);
  }
}

async function removeService(req, res, next) {
  try {
    const { serviceId } = req.params || {};
    const result = await agencyService.deleteService(serviceId)
    res.json(createResponse.success("Service is deleted.", result))
  } catch (error) {
    next(error)
  }
}

module.exports = Object.freeze({
  getServices,
  getServiceById,
  addService,
  editService,
  removeService
})
