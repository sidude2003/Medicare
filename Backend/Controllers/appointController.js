import Appointment from "../models/AppointmentSchema.js";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

export const appointment = async (req, res) => {
  const { user, doctor, appointment_date, appointment_reason } = req.body;

  console.log(Date(appointment_date));

  try {
    const checkUser = await User.findOne({ email: user });
    if (!checkUser) {
      return res.status(404).json({ error: "user not found" });
    }
    const checkDoctor = await Doctor.findOne({ name: doctor });
    if (!checkDoctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    const newAppointment = new Appointment({
      user: checkUser._id,
      doctor: checkDoctor._id,
      appointment_time: Date(appointment_date),
      appointment_reason,
    });

    const savedAppointment = await newAppointment.save();

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment: savedAppointment,
    });
  } catch (error) {
    console.error("Error creating appointment", error);
    res.status(500).json({ error: "Internal Server error" });
  }
};
