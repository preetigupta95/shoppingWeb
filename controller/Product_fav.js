
var Product_favModel = require('../model/Product_fav');

let Product_favController = {};

Product_favController.add = (req,res) => {

  let data =req.body;

    Product_favModel.add(data,(err,result)=> {
      res.send(result);
    })
}


module.exports = Product_favController;
