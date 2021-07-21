const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const {
  createAdmin,
  login,
//  getUserByUserId,
//  getUsers,
//  updateUsers,
//  deleteUser
} = require("./admin.controller");
//router.get("/admin", checkToken, getUsers);
router.post("/admin",   createAdmin);
//router.get("admin/:id", checkToken, getUserByUserId);
router.post("/admin/adminlogin", login);
//router.patch("/admin", checkToken, updateUsers);
//router.delete("/admin", checkToken, deleteUser);

module.exports = router;