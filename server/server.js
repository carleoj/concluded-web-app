import express from 'express';
import cors from 'cors';

import skills from './services/technologyService.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({
        message: 'API is working',
        skillsLoaded: skills.length
    });
});

const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});