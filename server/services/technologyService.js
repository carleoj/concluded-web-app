import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ontologyPath = path.join(
    __dirname,
    '..',
    'MIND-tech-ontology',
    '__aggregated_skills.json'
);

const skills = JSON.parse(
    fs.readFileSync(ontologyPath, 'utf-8')
);

/*
 * Create a lookup table:
 *
 * "react" -> React skill
 * "react.js" -> React skill
 * "reactjs" -> React skill
 */
const technologyIndex = new Map();

for (const skill of skills) {
    const names = [
        skill.name,
        ...(skill.synonyms ?? [])
    ];

    for (const name of names) {
        technologyIndex.set(
            name.toLowerCase(),
            skill
        );
    }
}

console.log(`Loaded ${skills.length} skills`);
console.log(`Created ${technologyIndex.size} technology aliases`);

export {
    skills,
    technologyIndex
};