const db = require('../config/database');
const product_favModel = {};

// ADd Records in order_table

product_favModel.add =(data,done) => {

  const uid = data.uid;
  const pid = data.pid;
  //var x;

var insertQuery = `insert into product_fav(uid, pid) values('${uid}','${pid}')`;
//  var selectQuery = `select pid from product_table where id = '${x}'`;
  const resultData = {};
  db.execute(insertQuery, (err, result)=>{

    console.log(result);
//     x = result.insertId;

    if (err) {
      resultData.status = 0;
      resultData.message = "something went wrong";
    }else {
        resultData.status = 1;
        resultData.lastinsertedid= result.insertId;
        resultData.message = "Successfully inserted";
    }

    done(null,resultData);
  })


}



module.exports = product_favModel;
