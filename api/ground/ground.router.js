const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const {
  createBooking,
  getBooking,
  getBookingById,
  getRequest,
  bookingStatus,
  updateBooking,
  deleteBooking
} = require("./ground.controller");
router.get("/ground", getBooking);
router.get("/ground/request", getRequest);
router.post("/ground", createBooking);
router.get("/ground/:id", getBookingById);
router.patch("/ground/status", bookingStatus);
router.patch("/ground", updateBooking);
router.delete("/ground/:id", deleteBooking);

module.exports = router;