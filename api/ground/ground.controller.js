
const {
  create,
  createbulk,
  getBooking,
  getBookingById,
  bookingStatus,
  updateBooking,
  deleteBooking,
  getRequest
} = require("./ground.service");
const { ground_mail } = require("../email/email.service");
const { getMemberEmail } = require("../member/member.service");
const { getCoachEmail } = require("../coach/coach.service");
module.exports = {

  createBooking: (req, res) => {
    const body = req.body;
    
    
    getMemberEmail(body.email, (err, member) => {
      if (err) {
        console.log(err);
      }
      getCoachEmail(body.email, (err, coach) => {
        if (err) {
          console.log(err);
        }

        if(member && coach){
          console.log(coach,member);
           if(body.type === "halfday" || body.type === "fullday"){

            create(body, (err, results) => {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  success: 0,
                  message: "Database connection errror"
                });
              }
    
             if(results){
              return res.status(200).json({
                success: 1,
                data: results,
                message: "Successfully Booked",
              });
            }
            });


           }else if(body.type === "tournament" || body.type === "practice"){

            createbulk(body, (err, results) => {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  success: 0,
                  message: "Database connection errror"
                });
              }
    
             if(results){
              return res.status(200).json({
                success: 1,
                data: results,
                message: "Successfully Booked",
              });
            }
            });

           } else {


            return res.status(400).json({
              success: 0,
              message: "Invalid selection",
            });



           }


        } 

        else{
          return res.status(400).json({
            success: 0,
            message: "Invalid Email",
          });


        }
      });
    });
   
  
  },

  

  getBookingById: (req, res) => {
    const id = req.params.id;
    getBookingById(id, (err, results) => {
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
     
      return res.json({
        success: 1,
        data: results
      });
    });
  },

  getBooking: (req, res) => {
    getBooking((err, results) => {
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

  bookingStatus: (req, res) => {
    const body = req.body;
    bookingStatus(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if(body.status === "yes"){
        ground_mail(body ,(error, results) =>{
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
      if(results){ 
      return res.status(200).json({
        success: 1,
        data: results,
        message: "updated successfully"
      });
    }
    });
  },


  updateBooking: (req, res) => {
    const body = req.body;
    updateBooking(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        success: 1,
        data: results,
        message: "updated successfully"
      });
    });
  },
  deleteBooking: (req, res) => {
    const id = req.params.id;
    deleteBooking(id, (err, results) => {
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

};
