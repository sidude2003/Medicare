import express from "express";
import { appointment } from "../Controllers/appointController.js";

const router = express.Router();

router.post("/appointment", appointment);

export default router;
