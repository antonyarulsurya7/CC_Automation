const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const {
  createMember,
  login,
  getMemberById,
  getMember_record,
  getMembers,
  getRequest,
  memberStatus,
  updateMembers,
  deleteMember,
  getMembers_record,
  updateRecord,
  update_Batsman_Record,
  update_Bowler_Record,
  update_Wicket_keeper
} = require("./member.controller");
router.get("/member", getMembers);
router.get("/member/request", getRequest);
router.post("/member/status", memberStatus);
router.post("/member", createMember);  
router.get("/member/:id", getMemberById);
router.post("/member/memberlogin", login);
router.patch("/member", updateMembers);
router.delete("/member/:id", deleteMember);
router.get("/member/record/:id", getMember_record);
router.get("/records", getMembers_record);
router.patch("/record", updateRecord);
router.patch("/batsman_record", update_Batsman_Record);
router.patch("/bowler_record", update_Bowler_Record);
router.patch("/keeper_record", update_Wicket_keeper);

module.exports = router;