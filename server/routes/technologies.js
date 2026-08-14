import express from 'express';
import { skills } from '../services/technologyService.js';

const router = express.Router();
const DEFAULT_LIMIT = 20;

router.get('/', (req, res) => {
    const search = String(req.query.search ?? '').trim().toLowerCase();
    const limit = DEFAULT_LIMIT;

    if (!search) {
        return res.json({ results: [] });
    }

    const results = [];
    const seen = new Set();

    for (const skill of skills) {
        if (results.length >= limit) {
            break;
        }

        const nameLower = skill.name.toLowerCase();
        const matchesName = nameLower.includes(search);
        const matchesSynonym = (skill.synonyms ?? []).some((synonym) =>
            synonym.toLowerCase().includes(search)
        );

        if ((matchesName || matchesSynonym) && !seen.has(skill.name)) {
            seen.add(skill.name);
            results.push(skill.name);
        }
    }

    results.sort((a, b) => {
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();
        const aStarts = aLower.startsWith(search) ? 0 : 1;
        const bStarts = bLower.startsWith(search) ? 0 : 1;

        if (aStarts !== bStarts) {
            return aStarts - bStarts;
        }

        return a.localeCompare(b);
    });

    res.json({ results });
});

export default router;
