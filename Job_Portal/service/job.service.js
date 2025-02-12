const Job = require("../model/jobs");
const { getCompanyById } = require("../repository/company");

const createJob = async (data) => {
  try {
    let company = await getCompanyById(data.companyId);
    return company
    
  } catch (error) {
    throw new Error(error);
  }
}

const getJobById = async (id) => {
  try {
    let job = await Job.findById(id);
    return job;
  } catch (error) {
    throw new Error(error);
  }
};

const getAllByCompanyId = async (companyId) => {
  try {
    let jobs = await Job.find({ companyId: companyId });
    return jobs;
  } catch (error) {
    throw new Error(error);
  }
}

const getAll = async (query) => {
  try {
    let jobs = await Job.find(query);
    return jobs;
  } catch (error) {
    throw new Error(error);
  }
}

const update = async (id, data) => {
  try {
    let jobs = await Job.findByIdAndUpdate(id, data, { new: true });
    return jobs;
  } catch (error) {
    throw new Error(error);
  }
};

const Delete = async (id) => {
  try {
    let jobs = await Job.findByIdAndDelete(id);
    return jobs;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports={createJob,getAll,getJobById,getAllByCompanyId,update,Delete}