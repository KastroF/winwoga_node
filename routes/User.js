const express = require("express"); 

const router = express.Router(); 

const userCtrl = require("../controllers/User"); 

const auth = require("../middleware/auth");


router.post("/onlogin", userCtrl.login);
router.get("/getuser", auth, userCtrl.getUser)
router.post("/updateservice", auth, userCtrl.updateService);
router.post("/addservice", auth, userCtrl.addService);
router.get("/getrecs", auth, userCtrl.getRecs);

module.exports = router;