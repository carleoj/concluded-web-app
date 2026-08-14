import express from 'express';
import { analyzeJob } from '../services/jobAnalyzer.js';

const router = express.Router();

router.post('/', (req, res) => {
    const {
        techStack,
        jobDescription
    } = req.body;

    if (
        !Array.isArray(techStack) ||
        typeof jobDescription !== 'string'
    ) {
        return res.status(400).json({
            error: 'techStack must be an array and jobDescription must be a string'
        });
    }

    const result = analyzeJob(
        techStack,
        jobDescription
    );

    res.json(result);
});

export default router;