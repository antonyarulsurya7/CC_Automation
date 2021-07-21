const pool = require("../../api/db/db");

module.exports = {

    create: (data, callBack) => {
        pool.query(
          `insert into notice_board(nid, event_name, link) 
                    values(?,?,?)`,
          [
            null,
            data.event,
            data.link
          ], 
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },

      getEventName: (event, callBack) => {
        pool.query(
          `select * from notice_board where event_name = ?`,
          [event],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },

    getNotice: callBack => {
        pool.query(
          `select nid,event_name,link from notice_board`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },



      updateNotice: (data, callBack) => {
        pool.query(
          `update notice_board set event_name=?, link=? where nid = ?`,
          [
            data.event,
            data.link,
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


      deleteNotice: (id, callBack) => {
        pool.query(
          `delete from notice_board where nid = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },

      create_team: (data, callBack) => {
        pool.query(
          `insert into team_selection(id, coach_id, tournament_name, team, name) 
                    values(?,?,?,?,?)`,
          [
            null,
            data.id,
            data.tname,
            data.team,
            data.name
          ], 
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },

      getTeam: callBack => {
        pool.query(
          `select * from team_selection`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },

      getTournementName: (tname, callBack) => {
        pool.query(
          `select * from team_selection where tournament_name = ?`,
          [tname],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },

      updateTeam: (data, callBack) => {
        pool.query(
          `update team_selection set tournament_name=?, team=? where id = ?`,
          [
            data.name,
            data.team,
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

      deleteTeam: (id, callBack) => {
        pool.query(
          `delete from team_selection where id = ?`,
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