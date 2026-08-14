import { technologyIndex } from './technologyService.js';

export function extractTechnologies(jobDescription) {
    const detected = new Map();

    const text = jobDescription.toLowerCase();

    for (const [alias, skill] of technologyIndex) {
        const escapedAlias = alias.replace(
            /[.*+?^${}()|[\]\\]/g,
            '\\$&'
        );

        const regex = new RegExp(
            `(?<![a-z0-9])${escapedAlias}(?![a-z0-9])`,
            'i'
        );

        if (regex.test(text)) {
            detected.set(skill.name, skill);
        }
    }

    return [...detected.values()];
}

export function compareTechStack(
    userStack,
    detectedTechnologies
) {
    const userTechnologies = new Set();

    for (const technology of userStack) {
        const normalized = technologyIndex.get(
            technology.toLowerCase()
        );

        if (normalized) {
            userTechnologies.add(normalized.name);
        }
    }

    const matched = [];
    const missing = [];

    for (const technology of detectedTechnologies) {
        if (userTechnologies.has(technology.name)) {
            matched.push(technology.name);
        } else {
            missing.push(technology.name);
        }
    }

    const total = detectedTechnologies.length;

    const score = total === 0
        ? 0
        : (matched.length / total) * 100;

    return {
        score: Number(score.toFixed(2)),
        matched,
        missing,
        detected: detectedTechnologies.map(
            technology => technology.name
        )
    };
}

export function analyzeJob(
    userStack,
    jobDescription
) {
    const detectedTechnologies =
        extractTechnologies(jobDescription);

    return compareTechStack(
        userStack,
        detectedTechnologies
    );
}