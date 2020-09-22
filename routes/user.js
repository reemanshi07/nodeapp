const express = require("express");
const router = express.Router();
const createUserController = require("../controller/user/create-user");
const userDetailController = require("../controller/user/user-detail");

router.get("/user-detail", userDetailController.user_detail);
router.post("/create-user", createUserController.create_user);
// router.get('/create-user',function(req, res) {
//   console.log('req ', req)
//   console.log('res ', res)
//   res.send('test');
//   res.end();
// } )

module.exports = router;
