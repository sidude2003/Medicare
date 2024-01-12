import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  appointment_time: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
  },
  appointment_reason: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Appointment", appointmentSchema);
