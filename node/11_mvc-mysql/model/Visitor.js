const mysql = require("mysql");

// createConnection : mysql 연결 정보를 받아서 mysql과 연결
// connect DB > host, user, password. dbname,
const conn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "heysirilee!3!",
  database: "test",
});

// exports.getVisitors = () => {
//   return [
//     { id: 1, userName: "홍길동", comment: "내가 왔다" },
//     { id: 2, userName: "이찬혁", comment: "으라차차" },
//   ];
// };

exports.getVisitors = (callback) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    // 변수 err 가 빈 값이 아니라면, err가 발생한 것
    if (err) {
      throw err;
    }
    console.log("visitor: ", rows);
    callback(rows);
  });
};

exports.insertVisitor = (data, callback) => {
  const sql = `INSERT INTO visitor (userName, comment) VALUES ('${data.userName}', '${data.comment}')`;

  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    callback(result.insertId);
  });
};

exports.removeVisitor = (id, callback) => {
  const sql = `DELETE FROM visitor WHERE id= ${id}`;

  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }

    let flag = false;
    if (result.affectedRows) {
      flag = true;
    }
    console.log("visitor delete: ", result);
    callback(flag);
  });
};
