import { Router } from "express";
import { getAllMessages, sendMessage } from "../controller/messageController.js";
import { isAdminAuthenticated } from "../middlewares/auth.js";

const router = Router();

router.route("/send").post(sendMessage)
router.route("/getallmsg").get(isAdminAuthenticated,getAllMessages)

export default router