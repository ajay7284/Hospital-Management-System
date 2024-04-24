import { Router } from "express";
import { addNewAdmin, addNewDoctor, getAllDoctors, getUserDetails, login, logoutAdmin, logoutPatient, patientRegister } from "../controller/userController.js";
import { isAdminAuthenticated ,isPatientAuthenticated } from "../middlewares/auth.js";
const router = Router();

router.route("/register").post(patientRegister)
router.route("/login").post(login)
router.route("/admin/addnew").post(isAdminAuthenticated,addNewAdmin)
router.route("/admin/logout").get(isAdminAuthenticated,logoutAdmin)
router.route("/patient/logout").get(isPatientAuthenticated,logoutPatient)


router.route("/doctors").get(getAllDoctors)
router.route("/admin/me").get(isAdminAuthenticated,getUserDetails)
router.route("/patient/me").get(isPatientAuthenticated,getUserDetails)


router.route("/doctor/addnew").post(isAdminAuthenticated,addNewDoctor)

export default router