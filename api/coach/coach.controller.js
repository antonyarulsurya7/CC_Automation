  
const {
   create,
   getCoachByEmail,
   getCoachById,
   getCoachs,
   coachStatus,
   getRequest,
   updateCoach,
   deleteCoach
  } = require("./coach.service");
  const { coach_mail } = require("../email/email.service")
  const { hashSync, genSaltSync, compareSync } = require("bcrypt");
  const { sign } = require("jsonwebtoken");

module.exports = {

  createCoach: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    getCoachByEmail(body.email, (err, results) => {
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
    }else{
      return res.status(400).json({
        success:0,
        message: "Email already exist"
      });
    }
  });
  },

login: (req, res) => {
    const body = req.body;
    getCoachByEmail(body.email, (err, results) => {
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
      if (result && ((results.accepted) == "yes")) {
        results.password = undefined;
       const jsontoken = sign({ result: results }, "secretkey", {
        expiresIn: "1h"
  });
        return res.json({
          success: 1,
          message: "login successfully",
          cid: results.cid,
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
  },

  getCoachById: (req, res) => {
    const id = req.params.id;
    getCoachById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Record not Found"
        });
      }
      results.password = undefined;
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },

  getCoachs: (req, res) => {
    getCoachs((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },

  getRequest: (req, res) => {
    getRequest((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json({
        success: 1,
        data: results
      });
    });
  },

  coachStatus: (req, res) => {
    const body = req.body;
    coachStatus(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if(body.accepted === "yes"){
        coach_mail(body ,(error, results) =>{
          if(error){
              console.log(error);
          }
          if(results){
          return res.status(200).json({
              success: 1,
              data: results,
              message: "Successfully Mail Sended"
              
            });
          }
          else {

              return res.status(400).json({
                  success: 0,
                  data: results,
                  message: "Mail not Sended"
                  
                });
              

          }
      })
      }
      return res.status(200).json({
        success: 1,
        message: "updated successfully"
      });
    });
  },


  updateCoaches: (req, res) => {
    const body = req.body;

    updateCoach(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      
      return res.status(200).json({
        success: 1,
        message: "updated successfully"
      });
    });
  },
  deleteCoach: (req, res) => {
    const id = req.params.id;
    deleteCoach(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 1,
          message: "user deleted successfully"
          
        });
      }
      return res.json({

        success: 0,
          message: "Record Not Found"
      });
    });
  }



}