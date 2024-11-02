
import express from "express"
import { authlogin, authlogout, authSingUp, checkAuth, forgotPassword, resetPassword, verifyEmail } from "../controller/authcontroller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router =express.Router();


router.get("/checkAuth",verifyToken,checkAuth)
router.post("/singup",authSingUp)
router.post("/verify-email", verifyEmail);

router.post("/login",authlogin)

router.post("/logout",authlogout)
router.post("/forgotPassword",forgotPassword)
router.post("/resetPassword/:token",resetPassword)

export default router