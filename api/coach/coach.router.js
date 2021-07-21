const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const {
  createCoach,
  login,
  getCoachById,
  getCoachs,
  coachStatus,
  getRequest,
  updateCoaches,
  deleteCoach
} = require("./coach.controller");
router.get("/coach",  getCoachs);
router.post("/coach", createCoach);
router.patch("/coach/status", coachStatus);
router.get("/coach/request", getRequest);
router.get("/coach/:id", getCoachById);
router.post("/coach/coachlogin", login);
router.patch("/coach", updateCoaches);
router.delete("/coach/:id", deleteCoach);

module.exports = router;