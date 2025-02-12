const jobService = require("../service/jobs");

const createJob = async (req, res) => {
    try {
        req.body.userId = req.user.id;
        const job = await jobService.create(req.body)
        res.status(201).json({data: job });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllJobs = async (req, res) => {
    try {
        const jobs = await jobService.getAll(req.query)
        res.status(200).json({data: jobs });
    } catch (error) {
        res.status(500).json({message: error.message })
    }
}

const getJobById = async (req, res) => {
    try {
        const job = await jobService.getJobById(req.params.id);
        if (!job) {
            return res.status(404).json({ msg: "Job not found" });
        }
        res.status(200).json({ data: job });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getJobsByCompanyId = async (req, res) => {
    try {
        const jobs = await jobService.getAllByCompanyId(req.params.companyId);
        res.status(200).json({ data: jobs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateJob = async (req, res) => {
    try {
        const job = await jobService.update(req.params.id, req.body);
        if (!job) {
            return res.status(404).json({ msg: "Job not found" });
        }
        res.status(200).json({ data: job });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteJob = async (req, res) => {
    try {
        const job = await jobService.delete(req.params.id);
        if (!job) {
            return res.status(404).json({ msg: "Job not found" });
        }
        res.status(200).json({ msg: "Job deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports={createJob,getAllJobs,getJobById,getJobsByCompanyId,updateJob,deleteJob}