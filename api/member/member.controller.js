
const {
  create,
  getMemberByMemberEmail,
  getMemberById,
  getMembers,
  getMember,
  getMember_record,
  memberStatus,
  updateMember,
  deleteMember,
  getRequest,
  create_record,
  getMembers_record,
  updateRecord,
  update_Batsman_Record,
  update_Bowler_Record,
  update_Wicket_keeper
} = require("./member.service");
const { member_mail } = require("../email/email.service")
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {

  createMember: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);

    getMemberByMemberEmail(body.email, (err, results) => {
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
    getMemberByMemberEmail(body.email, (err, results) => {
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
          id: results.id,
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
  },

  getMemberById: (req, res) => {
    const id = req.params.id;
    getMemberById(id, (err, results) => {
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
      return res.json({
        success: 1,
        data: results
      });
    });
  },
  



  getMembers: (req, res) => {
    getMembers((err, results) => {
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

  memberStatus: (req, res) => {
    const body = req.body;
    memberStatus(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if(body.accepted === "yes"){
        member_mail(body ,(error, results) =>{
          if(error){
              console.log(error);
          }

          create_record(body ,(error, results) =>{
            if(error){
                console.log(error);
            }
          })
    
          
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
        data: results,
        message: "updated successfully"
      });
    });
  },

  
  updateMembers: (req, res) => {
    const body = req.body;

    updateMember(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  },
  deleteMember: (req, res) => {
    const id = req.params.id;
   // console.log(id);
    deleteMember(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 1,
          data: results,
          message: "user deleted successfully"
          
        });
      }
      return res.json({

        success: 0,
          message: "Record Not Found"
      });
    });
  },

  //Records
  getMembers_record: (req, res) => {
    getMembers_record((err, results) => {
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


  getMember_record: (req, res) => {
    const id = req.params.id;
    getMember_record(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.staus(400).json({
          success: 0,
          message: "Record not Found"
        });
      }
      console.log(results);
      return res.json({
        success: 1,
        data: results
      });
    });
  },


  
  updateRecord: (req, res) => {
    const body = req.body;

    updateRecord(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  },

  update_Batsman_Record: (req, res) => {
    const body = req.body;

    update_Batsman_Record(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  },

  update_Bowler_Record: (req, res) => {
    const body = req.body;

    update_Bowler_Record(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  },

  update_Wicket_keeper: (req, res) => {
    const body = req.body;

    update_Wicket_keeper(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        message: "updated successfully"
      });
    });
  }

};
