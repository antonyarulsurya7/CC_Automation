const nodemailer = require("nodemailer");



module.exports = {
    member_mail: ( data, callBack) => {

      //  "use strict";
        

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.SENDER, // generated ethereal user
                    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
                },
                
            });

            let mailOptions = {
                from: `"Madurai Cricket Club" <${process.env.SENDER}>`, // sender address
                to: data.email, // list of receivers
                subject: "Accepted", // Subject line
                text: "Your Registration Request accepted as a member", // plain text body
                html: `<p>Your Registration Request accepted as a member</P><a href="http://localhost:4200/login/memberlogin">click here</a><p> to login</p>`, // html body
            }

            // send mail with defined transport object
            let info = await transporter.sendMail(mailOptions);

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            if(info.error){
                callBack(info.error);
            }
            return callBack(null, info)
            
        }

        main().catch(console.error);


    },
    coach_mail: ( data, callBack) => {

        //  "use strict";
          
  
          // async..await is not allowed in global scope, must use a wrapper
          async function main() {
              // Generate test SMTP service account from ethereal.email
              // Only needed if you don't have a real mail account for testing
              
  
              // create reusable transporter object using the default SMTP transport
              let transporter = nodemailer.createTransport({
                  host: "smtp.gmail.com",
                  port: 587,
                  secure: false, // true for 465, false for other ports
                  auth: {
                      user: process.env.SENDER, // generated ethereal user
                      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
                  },
                  
              });
  
              let mailOptions = {
                  from: `"Madurai Cricket Club" <${process.env.SENDER}>`, // sender address
                  to: data.email, // list of receivers
                  subject: "Accepted", // Subject line
                  text: "Your Registration Request accepted as a coach", // plain text body
                  html: `"<p>Your Registration Request accepted as a coach</P>"<a href="http://localhost:4200/login/coachlogin">click here</a><p>To Login</p>`, // html body
              }
  
              // send mail with defined transport object
              let info = await transporter.sendMail(mailOptions);
  
              console.log("Message sent: %s", info.messageId);
              // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
              // Preview only available when sending through an Ethereal account
              console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
              // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
              if(info.error){
                  callBack(info.error);
              }
              return callBack(null, info)
              
          }
  
          main().catch(console.error);
  
  
      },
    ground_mail: ( data, callBack) => {

        //  "use strict";
          
  
          // async..await is not allowed in global scope, must use a wrapper
          async function main() {
              // Generate test SMTP service account from ethereal.email
              // Only needed if you don't have a real mail account for testing
              
  
              // create reusable transporter object using the default SMTP transport
              let transporter = nodemailer.createTransport({
                  host: "smtp.gmail.com",
                  port: 587,
                  secure: false, // true for 465, false for other ports
                  auth: {
                      user: process.env.SENDER, // generated ethereal user
                      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
                  },
                  
              });
  
              let mailOptions = {
                  from: `"Madurai Cricket Club" <${process.env.SENDER}>`, // sender address
                  to: data.email, // list of receivers
                  subject:"Accepted", // Subject line
                  text: "Your Ground Registration Request accepted", // plain text body
                  html: `<p>Your Ground Registration Request accepted</P><br><br><p>Further request contact our admin</p>`, // html body
              }
  
              // send mail with defined transport object
              let info = await transporter.sendMail(mailOptions);
  
              console.log("Message sent: %s", info.messageId);
              // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
              // Preview only available when sending through an Ethereal account
              console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
              // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
              if(info.error){
                  callBack(info.error);
              }
              return callBack(null, info)
              
          }
  
          main().catch(console.error);
  
  
     },
     team_mail: ( data, callBack) => {

        //  "use strict";
          
  
          // async..await is not allowed in global scope, must use a wrapper
          async function main() {
              // Generate test SMTP service account from ethereal.email
              // Only needed if you don't have a real mail account for testing
              
  
              // create reusable transporter object using the default SMTP transport
              let transporter = nodemailer.createTransport({
                  host: "smtp.gmail.com",
                  port: 587,
                  secure: false, // true for 465, false for other ports
                  auth: {
                      user: process.env.SENDER, // generated ethereal user
                      pass: process.env.EMAIL_PASSWORD, // generated ethereal password
                  },
                  
              });
  
              let mailOptions = {
                  from: `"Madurai Cricket Club" <${process.env.SENDER}>`, // sender address
                  to: data.email, // list of receivers
                  subject:`Selected For The${data.tournament}`, // Subject line
                  text: `You are Slected to ${data.tournament}`, // plain text body
                  html: `<p>You are Slected to <h2>${data.tournament}</h2> Tournament</P>`, // html body
              }
  
              // send mail with defined transport object
              let info = await transporter.sendMail(mailOptions);
  
              console.log("Message sent: %s", info.messageId);
              // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
              // Preview only available when sending through an Ethereal account
              console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
              // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
              if(info.error){
                  callBack(info.error);
              }
              return callBack(null, info)
              
          }
  
          main().catch(console.error);
  
  
     }
    
}
