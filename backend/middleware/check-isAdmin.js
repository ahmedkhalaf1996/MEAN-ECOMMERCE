const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports =  (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
  const userId =  decodedToken.userId;

    User.findOne({ _id : userId })
    .then(
      result => {
       if(result.isAdmin == true){
        next();
       }
       else {
        res.status(401).json({ message: "You are not Admin!" });
       }
     }

    );

};




