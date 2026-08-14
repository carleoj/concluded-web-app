# Tech Stack Match

## Product Context

Tech Stack Match is a web application that helps developers quickly determine how closely their existing technical skills match the technologies mentioned in a job description.

The core product deliberately avoids expensive AI analysis. Instead, it uses a deterministic technology-matching system backed by the **MIND Tech Skills Ontology**. The goal is to provide a fast, transparent, and explainable technical-stack comparison rather than attempting to judge a candidate's overall qualification.

## Problem

Job descriptions often contain many technologies, frameworks, tools, databases, languages, and platforms. Existing AI-powered job analyzers can be expensive, subscription-based, overly broad, or produce subjective interpretations of whether a person is qualified.

A developer may simply want to know:

> "What technologies does this job actually mention, and how many of them do I already know?"

Tech Stack Match addresses that specific problem.

## Core User Flow

1. The user selects their current technologies from a searchable technology selector.
2. The selected stack is stored locally in the browser so the user does not need to reselect it every time they return.
3. The user pastes a job description into the application.
4. The frontend sends the user's selected technologies and the job description to the backend.
5. The backend extracts recognized technologies from the job description using the MIND ontology.
6. Technology aliases/synonyms are normalized to their canonical technology names.
7. The backend compares the detected technologies against the user's stack.
8. The backend returns:
   - Technical match percentage
   - Matched technologies
   - Missing technologies
   - All detected technologies
9. The frontend displays the result clearly.

## Example

### User Stack

```text
React
Node.js
Docker
MySQL
```

### Job Description

```text
We are looking for a developer with experience in React,
TypeScript, Node.js, PostgreSQL, Docker, and AWS.
```

### Result

```json
{
  "score": 50,
  "matched": [
    "React",
    "Docker",
    "Node.js"
  ],
  "missing": [
    "PostgreSQL",
    "JavaScript",
    "TypeScript"
  ],
  "detected": [
    "React",
    "Docker",
    "PostgreSQL",
    "JavaScript",
    "TypeScript",
    "Node.js"
  ]
}
```

The score represents the proportion of detected technologies that are explicitly present in the user's selected stack.

## Technology Knowledge Base

The application uses the **MIND Tech Skills Ontology** as its technology knowledge base.

The relevant data is currently stored in:

```text
server/MIND-tech-ontology/__aggregated_skills.json
```

Each skill contains information such as:

```json
{
  "name": "React",
  "synonyms": [
    "react",
    "react.js",
    "react js",
    "reactjs"
  ],
  "type": ["Framework"],
  "technicalDomains": ["Frontend"],
  "impliesKnowingSkills": [
    "HTML",
    "Webpack",
    "React Router",
    "CSS",
    "Babel",
    "Redux",
    "Create React App",
    "JavaScript"
  ]
}
```

For the initial implementation, the matching system primarily uses:

- `name`
- `synonyms`

The `impliesKnowingSkills` relationships are reserved for a future, more advanced matching system.

## Technology Normalization

Different names for the same technology must resolve to a single canonical technology.

For example:

```text
react
react.js
react js
reactjs
```

all resolve to:

```text
React
```

Likewise:

```text
node
nodejs
node.js
node js
```

resolve to:

```text
Node.js
```

The backend builds a technology index from the MIND ontology to perform these lookups efficiently.

## Backend Architecture

The backend is a Node.js/Express API using ES Modules.

Current structure:

```text
server/
├── MIND-tech-ontology/
│   └── __aggregated_skills.json
├── services/
│   ├── technologyService.js
│   └── jobAnalyzer.js
├── routes/
│   └── analyze.js
├── server.js
└── package.json
```

### Technology Service

`technologyService.js` loads the MIND ontology and creates a lookup index containing canonical names and aliases.

Conceptually:

```text
MIND JSON
    ↓
Load skills
    ↓
name + synonyms
    ↓
Technology index
```

### Job Analyzer

`jobAnalyzer.js` is responsible for:

```text
Job Description
      ↓
Technology extraction
      ↓
Canonical technology names
      ↓
Stack comparison
      ↓
Score
```

### Analyze API

The primary API endpoint is:

```http
POST /api/analyze
```

Request body:

```json
{
  "techStack": [
    "React",
    "Node.js",
    "Docker",
    "MySQL"
  ],
  "jobDescription": "..."
}
```

Response:

```json
{
  "score": 75,
  "matched": [],
  "missing": [],
  "detected": []
}
```

The exact score and arrays depend on the submitted job description and user stack.

## Frontend Architecture

The frontend is a React application.

The primary UI consists of two major inputs:

### 1. User Technology Stack

A searchable technology selector.

The user should be able to:

- Search technologies
- Select technologies
- See selected technologies as removable bubbles/tags
- Remove selected technologies
- Keep their selections between visits

The frontend should not load the entire MIND ontology into the browser unnecessarily. Technology search should preferably be handled through the backend API.

Potential endpoint:

```http
GET /api/technologies?search=react
```

### 2. Job Description

A large text input where the user pastes the job description.

The frontend submits both values to:

```http
POST /api/analyze
```

## Local Persistence

The user's technology stack does **not** currently require a database.

The selected stack is stored using browser `localStorage`.

Example:

```js
localStorage.setItem(
  "techStack",
  JSON.stringify(techStack)
);
```

This allows the stack to persist across browser sessions without requiring:

- User accounts
- Authentication
- A users table
- A backend storage API
- A subscription

The stack is intentionally stored locally because it is simple user preference data and does not need server-side persistence in the MVP.

A database may be introduced later if the application supports accounts and cross-device synchronization.

## Scoring Philosophy

The primary score is intentionally simple and transparent.

For the initial implementation:

```text
score = matched technologies / detected technologies × 100
```

For example:

```text
Detected: 8
Matched: 6

6 / 8 × 100 = 75%
```

The score should be presented as a **technical-stack match**, not as a prediction of whether the user will get hired.

The application should avoid claims such as:

- "You are 75% qualified."
- "You have a 75% chance of getting hired."
- "You will pass the ATS."

Instead, use terminology such as:

- "Technical Stack Match"
- "6 of 8 technologies matched"
- "Missing technologies"
- "Detected technologies"

## Current Scope

The MVP should focus on:

- Technology selection
- Local stack persistence
- Job description analysis
- Technology extraction
- Technology normalization
- Stack comparison
- Transparent scoring
- Simple results UI

The MVP should **not** require:

- AI/LLM APIs
- User accounts
- Authentication
- Payments
- Subscriptions
- Resume analysis
- Interview prediction
- Hiring probability
- Complex dashboards

## Future Features

### Requirement Classification

The current extractor treats every detected technology as part of the comparison.

A future version should distinguish between:

```text
Required
Preferred
Nice to have
```

For example:

```text
React            Required
TypeScript       Required
AWS              Preferred
Kubernetes       Nice to have
```

This would allow weighted scoring.

### Skill Relationships

MIND contains `impliesKnowingSkills` relationships.

For example, React includes implied knowledge of technologies such as JavaScript.

A future version could distinguish between:

```text
Explicit Match
React ✓
```

and:

```text
Inferred Knowledge
JavaScript ✓
```

This should not initially replace explicit keyword matching because it could make the score less transparent.

### Browser Extension

A future browser extension will allow users to analyze job postings directly from job websites.

Conceptual flow:

```text
Job Listing Page
      ↓
Browser Extension
      ↓
Extract page text
      ↓
POST /api/analyze
      ↓
Tech Stack Match API
      ↓
Result displayed in extension
```

This could eventually support job boards and career sites without requiring the user to manually copy and paste the entire job description.

### Job URL Analysis

A future web application could also accept:

```text
Job Description URL
```

and retrieve the relevant page content before analysis.

This may require site-specific scraping or browser-side page extraction depending on the target website.

## Design Principles

1. **Fast** — Analysis should complete quickly.
2. **Transparent** — Users should see exactly what was detected and matched.
3. **Deterministic** — The same input should produce the same result.
4. **No unnecessary AI** — Use deterministic matching where it is sufficient.
5. **Privacy-conscious** — User technology preferences remain client-side in the MVP.
6. **Minimal UI** — The product should focus on the comparison rather than dashboards and unnecessary features.
7. **Explainable scoring** — Every percentage should be traceable to matched and missing technologies.

## Non-Goals

Tech Stack Match is not intended to:

- Determine whether someone is employable.
- Replace a recruiter's judgment.
- Predict hiring outcomes.
- Analyze personality or soft skills.
- Evaluate a resume in the MVP.
- Generate applications automatically.
- Use an LLM merely to make the product appear more sophisticated.

The central purpose is:

> **Extract the technologies from a job description and show the user how closely those technologies match their current technical stack.**
