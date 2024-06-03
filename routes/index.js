import express from "express"
import companiesRouter from "./companiesRouter.js"
import companyProfileRouter from "./companyProfileRouter.js"

const router = express.Router();

router.use(companiesRouter);
router.use(companyProfileRouter);

export default router