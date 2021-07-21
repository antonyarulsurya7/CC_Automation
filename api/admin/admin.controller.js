
const {
  create,
  getAdminByEmail,
  //    getUserByUserId,
  //    getUsers,
  //    updateUser,
  //    deleteUser
} = require("./admin.service");
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {

    createAdmin: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    getAdminByEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        create(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror"
            });
          }
          const jsontoken = sign({ result: results }, "secretkey", {
            expiresIn: "1h"
          });

          return res.status(200).json({
            success: 1,
            data: results,
            message: "Successfully Registered",
            token: jsontoken
          });
        });
      } else {
        return res.status(400).json({
          success: 0,
          message: "Email already exist"
        });
      }
    });

  },

  login: (req, res) => {
    const body = req.body;
    getAdminByEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.status(400).json({
          success: 0,
          data: "Invalid email or password"
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "secretkey", {
          expiresIn: "1h"
        });
        return res.json({
          success: 1,
          message: "login successfully",
          email: body.email,
          password: body.password,
          name: results.name,
          token: jsontoken
        });
      } else {
        return res.status(400).json({
          success: 0,
          data: "Invalid email or password"
        });
      }
    });
  }

}