const express = require("express");
const { InfoController } = require("../../controllers");

const aiplanesRoutes = require("./airplane-routes");

const router = express.Router();

router.use("/aiplanes", aiplanesRoutes);
router.get("/info", InfoController.Info);

module.exports = router;