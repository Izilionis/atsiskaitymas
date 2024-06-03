import CompanyProfile from "../models/CompanyProfile.js";
import Companies from "../models/Companies.js";

export async function getCompaniesProfile(req, res) {
  try {
    const companyProfile = await CompanyProfile.find();
    res.json(companyProfile);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export async function postCompaniesProfile(req, res) {
  const {companyId, founder, foundedYear, numberOfEmployees} = req.body;

  try {
    const company = await Companies.findById(companyId);
    if (!company) {
      return res.status(404).json({error: "Company not found"});
    }

    const companyProfile = new CompanyProfile({
      companyId,
      founder,
      foundedYear,
      numberOfEmployees,
    });

    await companyProfile.save();

    company.profileId = companyProfile._id;
    await company.save();

    res.status(201).json(companyProfile);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
}

export async function putCompaniesProfileById(req, res) {
  const {id} = req.params;
  const {companyId, founder, foundedYear, numberOfEmployees} = req.body;

  try {
    const companyProfile = await CompanyProfile.findById(id);
    if (companyId) {
      companyProfile.companyId = companyId;
    }
    if (founder) {
      companyProfile.founder = founder;
    }
    if (foundedYear) {
      companyProfile.foundedYear = foundedYear;
    }
    if (numberOfEmployees) {
      companyProfile.numberOfEmployees = numberOfEmployees;
    }

    await companyProfile.save();
    res.json(companyProfile);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
}
