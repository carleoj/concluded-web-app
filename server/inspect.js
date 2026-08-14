import { analyzeJob } from './services/jobAnalyzer.js';

const userStack = [
    'React',
    'Node.js',
    'Express',
    'MySQL',
    'Docker'
];

const jobDescription = `
We are looking for a Full Stack Developer.

Requirements:

- Experience with React
- Strong TypeScript knowledge
- Experience with Node.js
- PostgreSQL experience
- Docker
- AWS
`;

const result = analyzeJob(
    userStack,
    jobDescription
);

console.dir(result, { depth: null });