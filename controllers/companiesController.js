import Companies from "../models/Companies.js";

export async function getCompanies(req, res) {
  try {
    const company = await Companies.find();
    res.json(company);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export async function getCompaniesById(req, res) {
  const {id} = req.params;

  try {
    const company = await Companies.findById(id);
    res.json(company);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export async function postCompanies(req, res) {
  const {name, industry, location, profileId} = req.body;

  try {
    const newCompany = new Companies({
      name,
      industry,
      location,
      profileId,
    });

    await newCompany.save();
    res.json(newCompany);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export async function putCompaniesById(req, res) {
  const {id} = req.params;
  const {name, industry, location} = req.body;

  try {
    const company = await Companies.findById(id);
    if (name) {
      company.name = name;
    }
    if (industry) {
      company.industry = industry;
    }
    if (location) {
      company.location = location;
    }

    await company.save();
    res.json(company);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}
