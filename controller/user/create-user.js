const User = require("../../model/user");

exports.create_user = function(req, res) {
  console.log("req 897897", req);
  console.log("req 11111", req.body);

  // res.send({status: 200, message: 'hi'});

  //ToDo: add validation check on data sent over post api call

  //when all data in request is correct

  const userFindQuery = User.findOne({
    email: req.body.email
  });

  userFindQuery.exec((err, user) => {
    if (user) {
      res.statusCode = 400;
      res.send({
        message: "Email already exist.",
        status: 400
      });
      res.end();
      return;
    } else {
      const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
      });

      user.save(function(err) {
        if (err) {
          res.statusCode = 400;
          res.send({ err, status: 400 });
          return;
        }

        res.json({
          status: 200,
          message: "User with id :" + user._id + "created ."
        });
        res.end();
      });
    }
  });
};
