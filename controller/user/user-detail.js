const User = require("../../model/user");

exports.user_detail = function(req, res) {
  const userDetailQuery = User.findById({
    _id: req.body.id
  });
  userDetailQuery.exec(function(err, user) {
    if (user) {
      res.statusCode = 200;
      res.send({
        status: 200,
        data: user
      });
      res.end();
      return;
    } else {
      res.statusCode = 400;
      res.send({
        status: 400,
        message: "User not found"
      });
      res.end();
    }
  });
};
