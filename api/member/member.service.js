const pool = require("../../api/db/db");

module.exports = {
 
  create: (data, callBack) => {
    pool.query(
      `insert into member(id,name, email, password, player_type, dob, mobile_number,address) 
                values(?,?,?,?,?,?,?,?)`,
      [
        null,
        data.name,
        data.email,
        data.password,
        data.player_type,
        data.dob,
        data.mobile_number,
        data.address
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
   
  getMemberEmail:(email,callBack)=>{

  pool.query(
    `select email from member where email = ?`,
          [email],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }

  );
  
  },



    getMemberByMemberEmail: (email, callBack) => {
        pool.query(
          `select * from member where email = ?`,
          [email],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },

      getMemberById: (id, callBack) => {
        pool.query(
          `select id,name,email,player_type,dob,mobile_number,address from member where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },



      getMembers: callBack => {
        pool.query(
          `select id,name,email,player_type,dob,mobile_number,address from member where accepted = "yes"`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      getMember: callBack => {
        pool.query(
          `select id,name,email,password,player_type,dob,mobile_number,address from member where accepted = "yes"`,
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
          `select id,name,email,player_type,dob,mobile_number,address from member where not (accepted = "yes" or accepted = "no")`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      
      memberStatus: (data, callBack) => {
        pool.query(
          `update member set accepted=? where id = ?`,
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

      updateMember: (data, callBack) => {
        pool.query(
          `update member set name=?, email=?, player_type=?, dob=?, mobile_number=?, address=? where id = ?`,
          [
            data.name,
            data.email,
            data.player_type,
            data.dob,
            data.mobile_number,
            data.address,
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
      
      deleteMember: (id, callBack) => {
        pool.query(
          `delete from member where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },

//Records
getMembers_record:  callBack => {
  pool.query(
    `select * from records`,
    [],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      
      return callBack(null, results);
    }
  );
},

      getMember_record: (id , callBack) => {
        pool.query(
          `select * from records where member_id = ? `,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            
            return callBack(null, results);
          }
        );
      },

      create_record: (data, callBack) => {
        pool.query(
          `insert into records(id,member_id) 
                    values(?,?)`,
          [
            null,
            data.id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },

      updateRecord: (data, callBack) => {
        pool.query(
          `update records set age = ?, matches = ?, batsman_hand = ?, total_score = ?, high_score = ?, fifties_and_hundreds=? , bowler_hands = ?, type = ?, wickets = ? ,best = ?, five_wickets_haul = ? where member_id = ?`,
          [
            data.age,
            data.matches,
            data.batsman_hand,
            data.total_score,
            data.high_score,
            data.fifties_and_hundreds,
            data.bowler_hands,
            data.type,
            data.wickets,
            data.best,
            data.five_wickets_haul,
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
      
      update_Batsman_Record: (data, callBack) => {
        pool.query(
          `update records set age = ?, matches = ?, batsman_hand = ?, total_score = ?, high_score = ?, fifties_and_hundreds=? where member_id = ?`,
          [
            data.age,
            data.matches,
            data.batsman_hand,
            data.total_score,
            data.high_score,
            data.fifties_and_hundreds,
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

      update_Bowler_Record: (data, callBack) => {
        pool.query(
          `update records set age = ?, matches = ?, bowler_hands = ?, type = ?, wickets = ? ,best = ?, five_wickets_haul = ? where member_id = ?`,
          [
            data.age,
            data.matches,
            data.bowler_hands,
            data.type,,
            data.wickets,
            data.best,
            data.five_wickets_haul,
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
      
      update_Wicket_keeper: (data, callBack) => {
        pool.query(
          `update records set age = ?, matches = ?, batsman_hand = ?, total_score = ?, high_score = ?, fifties_and_hundreds=? ,wickets = ? where member_id = ?`,
          [
            data.age,
            data.matches,
            data.batsman_hand,
            data.total_score,
            data.high_score,
            data.fifties_and_hundreds,
            data.wickets,
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
      

};