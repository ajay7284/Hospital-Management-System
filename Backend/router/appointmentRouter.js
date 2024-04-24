import { Router } from "express";
import { deleteAppointment, getAllAppointments, postAppointment, updateAppointmentStatus } from "../controller/appointmentController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";

const router = Router();

router.route("/post").post(isPatientAuthenticated,postAppointment)
router.route("/post").post(isAdminAuthenticated,getAllAppointments)
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated,updateAppointmentStatus );
router.delete("/delete/:id", isAdminAuthenticated,deleteAppointment);



export default router