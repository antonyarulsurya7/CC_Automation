const {
    create,
    getEventName,
    getNotice,
    updateNotice,
    deleteNotice,
    create_team,
    getTournementName,
    getTeam,
    updateTeam,
    deleteTeam
} = require("./notice.service");

module.exports = {
    createnotice: (req, res) => {
    const body = req.body;
    

    getEventName(body.event, (err, results) => {
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
          
          return res.status(200).json({
            success: 1,
            result: results,
            message: "Successfully Notice Board Inserted",
            
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

    getEventName: (req, res) => {
      const event = req.params.id;
      getEventName(event, (err, results) => {
        if (err) {
          console.log(err);
        }
        if (!results) {
          return res.status(400).json({
            success: 0,
            message: "Data Not Found"
          });
        }
        else{
          return res.status(200).json({
            success: 1,
            data: results,
          });
        }
      })
    },

    getNotice: (req, res) => {
        getNotice((err, results) => {
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
    
      updateNotice: (req, res) => {
        const body = req.body;
    
        updateNotice(body, (err, results) => {
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

      deleteNotice: (req, res) => {
        const id = req.params.id;
       // console.log(id);
       deleteNotice(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 1,
              data: results,
              message: "Notice deleted successfully"
              
            });
          }
          return res.json({
    
            success: 0,
              message: "Record Not Found"
          });
        });
      },

      create_team: (req, res) => {
        const body = req.body;
        
    
        getTournementName(body.tname, (err, results) => {
          if (err) {
            console.log(err);
          }
          if (!results) {
            create_team(body, (err, results) => {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  success: 0,
                  message: "Database connection errror"
                });
              }
              
      
              return res.status(200).json({
                success: 1,
                data: results,
                message: "Successfully Team Inserted",
                
              });
            });
          } else {
            return res.status(400).json({
              success: 0,
              message: "Event already exist"
            });
          }
        });
        },
    
        getTeam: (req, res) => {
            getTeam((err, results) => {
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

        getTournementName: (req, res) => {
          const id = req.params.id; 
          getTournementName(id,(err, results) => {
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


          updateTeam: (req, res) => {
            const body = req.body;
        
            updateTeam(body, (err, results) => {
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
    
          deleteTeam: (req, res) => {
            const id = req.params.id;
           // console.log(id);
           deleteTeam(id, (err, results) => {
              if (err) {
                console.log(err);
                return;
              }
              if (!results) {
                return res.json({
                  success: 1,
                  data: results,
                  message: "Team deleted successfully"
                  
                });
              }
              return res.json({
        
                success: 0,
                  message: "Record Not Found"
              });
            });
          }

}