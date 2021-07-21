const pool = require("../db/db");

module.exports = {
 
  create: (data, callBack) => {
    pool.query(
      `insert into ground_booking(gid, type_of_booking, from_date, email, event ) 
                values(?,?,?,?,?)`,
      [
        null,
        data.type,
        data.from,
        data.email,
        data.event,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
    
  createbulk: (data, callBack) => {
    pool.query(
      `insert into ground_booking(gid, type_of_booking, from_date, to_date, email, event ) 
                values(?,?,?,?,?,?)`,
      [
        null,
        data.type,
        data.from,
        data.to,
        data.email,
        data.event,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },




  getBookingById: (id, callBack) => {
        pool.query(
          `select gid, type_of_booking, from_date, to_date, email ,event from ground_booking where gid = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },

      getBooking: callBack => {
        pool.query(
          `select gid, type_of_booking, from_date, to_date, email, event from ground_booking where status = "yes"`,
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
          `select gid, type_of_booking, from_date, to_date, email, event from ground_booking where not (status = "yes" or status = "no")`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      
      bookingStatus: (data, callBack) => {
        pool.query(
          `update ground_booking set status=? where gid = ?`,
          [
            data.status,
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

      updateBooking: (data, callBack) => {
        pool.query(
          `update ground_booking set  type_of_booking=?, from_date=?, to_date=?, email=?, event=? where gid = ?`,
          [
            data.type,
            data.from,
            data.to,
            data.email,
            data.event,
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
      deleteBooking: (id, callBack) => {
        pool.query(
          `delete from ground_booking where gid = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      }
};