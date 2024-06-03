import express from "express"
import { getCompaniesProfile, postCompaniesProfile, putCompaniesProfileById } from "../controllers/companyProfileController.js";

const router = express.Router();

router.get("/companyProfile", getCompaniesProfile)
router.post("/companyProfile", postCompaniesProfile)
router.put("/companyProfile/:id", putCompaniesProfileById)

export default router