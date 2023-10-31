// Table's structure is defind.
// orm은 객체와 db의 table을 매핑하는 기술
// sequelize를 이용해서 table의 구조를 정의할 필요가 있음

function Visitor(Sequelize, DataTypes) {
  return Sequelize.define(
    // table 정의, sequelize 객체의 define 메소드를 이용해서
    "visitor", // table 이름
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, // true 가 기본값
        primaryKey: true, // false 가 기본값
        autoIncrement: true,
      },
      username: {
        // VARCHER(10)
        type: DataTypes.STRING(10),
        // allwNull: ture, // true 가 기본값
      },
      comment: {
        // mediumtext
        type: DataTypes.TEXT("medium"),
        // allwNull: ture, // true 가 기본값
      },
    }, // column 정의
    {
      tableName: "visitor",
      // sequelize 에서 간혹 단수로 지정해둔 테이블 이름을 sql문을 날릴 때 복수로 변경을 시키는 경우가 있음
      // 그걸 방지하는게 freezeTableName
      freezeTableName: true,
      // insert, update 시에 그 시간을 자동으로 저장하겠다.
      timestamps: false,
    }
  );
}

module.exports = Visitor;
