import express from "express"
import { getCompanies, getCompaniesById, postCompanies, putCompaniesById } from "../controllers/companiesController.js";

const router = express.Router();

router.get("/companies", getCompanies)
router.get("/companies/:id", getCompaniesById)
router.post("/companies", postCompanies)
router.put("/companies/:id", putCompaniesById)

export default router