const router = require("express").Router();
const {
    member_mail,
    coach_mail,
    ground_mail,
    team_mail

} = require("./email.controller");
 
router.post("/memberemail", member_mail);
router.post("/coachemail", coach_mail);
router.post("/groundemail", ground_mail);
router.post("/teamemail", team_mail);
module.exports = router;