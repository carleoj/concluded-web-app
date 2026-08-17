import express from 'express';
import cors from 'cors';

import { skills } from './services/technologyService.js';
import analyzeRouter from './routes/analyze.js';
import technologiesRouter from './routes/technologies.js';
import resumeRouter from './routes/resume.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({
        message: 'API is working',
        skillsLoaded: skills.length
    });
});

app.use('/api/analyze', analyzeRouter);
app.use('/api/technologies', technologiesRouter);
app.use('/api/resume', resumeRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`)
})