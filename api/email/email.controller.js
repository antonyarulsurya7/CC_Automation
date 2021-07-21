const {
    member_mail,
    coach_mail,
    ground_mail,
    team_mail
} = require("./email.service");


module.exports = {
    member_mail: (req,res) => {
        const body = req.body;
        member_mail(body ,(error, results) =>{
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
    },
    coach_mail: (req,res) => {
        const body = req.body;
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
    },
    ground_mail: (req,res) => {
        const body = req.body;
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
    },
    team_mail: (req,res) => {
        const body = req.body;
        team_mail(body ,(error, results) =>{
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
    
}