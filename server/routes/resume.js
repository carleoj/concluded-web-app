import express from 'express';
import { extractTechnologies } from '../services/jobAnalyzer.js';

const router = express.Router();

router.post('/analyze', (req, res) => {
    const { text } = req.body;

    if (typeof text !== 'string' || !text.trim()) {
        return res.status(400).json({
            error: 'text must be a non-empty string'
        });
    }

    const detectedTechnologies = extractTechnologies(text);

    res.json({
        technologies: detectedTechnologies.map(
            (technology) => technology.name
        )
    });
});

export default router;