import Appointment from "../models/AppointmentSchema.js";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const appointment = async (req, res) => {
  const { user, doctor, appointment_date, appointment_reason } = req.body;
  // const { user } = useContext(authContext);
  // const { user } = req.user;

  try {
    let doc = null;
    let user = null;
    user = await User.findOne({ user });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    doc = await Doctor.findOne({ doctor });
    if (!doc) {
      return res.status(404).json({ message: "Doctor Not Found" });
    }

    const newAppointment = new Appointment({
      user: user,
      doctor: doctor,
      appointment_time: appointment_date,
      appointment_reason: appointment_reason,
    });

    await doc.save();
    res
      .status(200)
      .json({ success: true, message: "Appointment registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
