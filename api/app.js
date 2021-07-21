require("dotenv").config();
const express = require('express');
const app = express();
const db = require('./db/db');
const memberRouter = require("./member/member.router");
const coachRouter = require("./coach/coach.router");
const adminRouter = require("./admin/admin.router")
const EmailRouter = require("./email/email.router")
const GroundRouter = require("./ground/ground.router")
const NoticeBoardRouter = require("./notice/notice.router")




/* Database Connection*/
db.connect( (error) => {
    if(error){
        console.log(error)
    }else{
        console.log("MYSQL Connect...")
    }
});

app.use(express.json());


//cors headers middleware
app.use(function (req, res, next) {
    // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "*"); 
    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE")
    next();
  });



app.use("/api", memberRouter);
app.use("/api", coachRouter);
app.use("/api", adminRouter);
app.use("/api", EmailRouter);
app.use("/api", GroundRouter);
app.use("/api", NoticeBoardRouter);
/*Route handlers*/

/* Liste Routes*/

/*
    app.get('/api', (req,res) => {
    // we want to return an array of all the data
    res.json({
        success: 1,
        message: "This is rest apis working"
    });
})

app.post('/lists',(req,res) =>{

})    */

app.listen(3000, ()  => {
    console.log("Server is Listening on port 3000")
})