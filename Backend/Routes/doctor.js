import express from "express";
const router = express.Router();
import Doctor from "../models/DoctorSchema.js";

router.get("/find", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
