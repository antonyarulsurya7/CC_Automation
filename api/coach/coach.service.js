const pool = require("../db/db");

module.exports = {
 
  create: (data, callBack) => {
    pool.query(
      `insert into coach(cid, email, name, password,  coachtype, age, mobile_number) 
                values(?,?,?,?,?,?,?)`,
      [
        null,
        data.email,
        data.name,
        data.password,
        data.coachtype,
        data.age,
        data.mobile_number
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getCoachEmail:(email,callBack)=>{

    pool.query(
      `select email from coach where email = ?`,
            [email],
            (error, results, fields) => {
              if (error) {
                callBack(error);
              }
              return callBack(null, results);
            }
  
    );
    
    },

    getCoachByEmail: (email, callBack) => {
        pool.query(
          `select * from coach where email = ?`,
          [email],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },


      getCoachById: (id, callBack) => {
        pool.query(
          `select cid,email,name,password,coachtype,age,mobile_number from coach where cid = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },

      getCoachs: callBack => {
        pool.query(
          `select cid,email,name,password,coachtype,age,mobile_number from coach where accepted = "yes"`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },


      getRequest: callBack => {
        pool.query(
          `select cid,email,name,password,coachtype,age,mobile_number from coach where not (accepted = "yes" or accepted = "no")`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      
      coachStatus: (data, callBack) => {
        pool.query(
          `update coach set accepted=? where cid = ?`,
          [
            data.accepted,
            data.id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },

      updateCoach: (data, callBack) => {
        pool.query(
          `update coach set  email=?, name=?, coachtype=?, age=?, mobile_number=? where cid = ?`,
          [
            data.email,
            data.name,
            data.coachtype,
            data.age,
            data.mobile_number,
            data.id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            console.log(results)
            return callBack(null, results[0]);
          }
        );
      },
      deleteCoach: (id, callBack) => {
        pool.query(
          `delete from coach where cid = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      }



}