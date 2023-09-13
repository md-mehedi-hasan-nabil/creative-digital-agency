const express = require("express");
const {
  getServices,
  getServiceById,
  addService,
  editService,
  removeService
} = require("../controllers/AgencyService.controller");
const verifyIDToken = require("../middlewares/VerifyIDToken");
const router = express.Router();

router.get("/", getServices);
router.get("/:serviceId", verifyIDToken, getServiceById);
router.post("/", verifyIDToken, addService);
router.patch("/:serviceId", verifyIDToken, editService);
router.delete("/:serviceId", verifyIDToken, removeService);

module.exports = router;
