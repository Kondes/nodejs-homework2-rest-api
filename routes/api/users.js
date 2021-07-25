const express = require("express")
const router = express.Router()
const { users } = require("../../controllers")
const { checkToken } = require("../../middleware")

router.get("/current", checkToken, users.getCurrentUser)
router.patch("/", checkToken, users.updateUserSubscription)

module.exports = router