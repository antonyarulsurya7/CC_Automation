const router = require("express").Router();
const { 
    createnotice,
    getNotice,
    getEventName,
    updateNotice,
    deleteNotice,
    create_team,
    getTournementName,
    getTeam,
    updateTeam,
    deleteTeam
} = require("./notice.controller");
router.get("/notice", getNotice);
router.get("/eventname/:id", getEventName);
router.post("/notice", createnotice);
router.patch("/notice", updateNotice);
router.delete("/notice/:id", deleteNotice);
router.get("/team", getTeam);
router.get("/team/:id", getTournementName);
router.post("/team", create_team);
router.patch("/team", updateTeam);
router.delete("/team/:id", deleteTeam);

module.exports = router;