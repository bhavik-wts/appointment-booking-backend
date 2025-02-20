const express = require("express");
const {
  createAppointment,
  getAppointments,
} = require("../controllers/appointmentController");
const verifyToken = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", createAppointment);
router.get("/", verifyToken, getAppointments);

module.exports = router;
