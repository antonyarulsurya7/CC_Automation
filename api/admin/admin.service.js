const pool = require("../db/db");

module.exports = {

  create: (data, callBack) => {
    pool.query(
      `insert into admin(aid,email, name, password) 
                values(?,?,?,?)`,
      [
        null,
        data.email,
        data.name,
        data.password
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getAdminByEmail: (email, callBack) => {
    pool.query(
      `select * from admin where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
}