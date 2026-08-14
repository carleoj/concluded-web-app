# DESIGN.md

# Concluded — Design System & UI Direction

## 1. Design Intent

Concluded is a minimalist developer-focused web application that helps users compare their current technology stack against the technologies detected in a job description.

The visual direction is inspired by the supplied reference screenshot: a clean, spacious SaaS/education interface with:

- Soft, pale background surfaces
- Large editorial-style typography
- Floating rounded containers
- High contrast text
- Subtle borders and shadows
- A restrained accent color
- Generous whitespace
- Clear visual hierarchy
- A polished but approachable atmosphere

The reference is **inspiration only**. Concluded should have its own identity and should not reproduce the reference site's branding, layout, copy, or assets.

---

# 2. Product Name — "Concluded"

The name **Concluded** represents the moment when a job seeker can stop wondering whether a job is technically relevant to them.

The application takes two pieces of information:

```text
Your current technology stack
            +
Job description
            ↓
       Concluded
```

The product reaches a transparent conclusion based on the technologies explicitly detected in the job description and the technologies the user already knows.

The name should therefore communicate:

> "You have enough information to conclude whether this job's technical stack is a good match for you."

The name should not imply that the application determines whether someone will be hired or whether they are fully qualified. It concludes only the **technical-stack match**.

---

# 3. Core Design Principles

## Minimal

The interface should contain only what is necessary to perform the analysis.

The primary task should be obvious immediately:

1. Select your technologies.
2. Paste the job description.
3. Analyze the match.
4. Understand the result.

Avoid unnecessary dashboards, cards, statistics, onboarding screens, or decorative elements.

## Transparent

The user should understand how the result was produced.

The interface should clearly communicate:

- Technologies detected from the JD
- Technologies matched by the user's stack
- Technologies missing from the user's stack
- How the percentage is calculated
- That the system uses a deterministic technology knowledge base rather than an LLM

## Fast to Scan

The user is a developer/job seeker. Information should be readable at a glance.

Use:

- Clear section headings
- Short descriptions
- Technology chips
- Strong result hierarchy
- Limited paragraph lengths
- Consistent spacing

## Calm and Professional

The visual atmosphere should feel polished without looking corporate or overly technical.

Avoid:

- Excessive gradients
- Neon colors
- Excessive glassmorphism
- Dense dashboards
- Heavy borders
- Large numbers everywhere
- Unnecessary animations

---

# 4. Visual Direction

## Overall Atmosphere

Use a light, airy interface inspired by the supplied reference:

- Pale blue/blue-gray hero surface
- White content surfaces
- Near-black typography
- Soft gray borders
- Small yellow accent
- Rounded containers
- Subtle shadows

The accent should be used sparingly for:

- Primary action emphasis
- Selected technology states
- Important highlights
- Small decorative details
- Positive match indicators where appropriate

The design should remain primarily neutral.

## Suggested Palette

These are starting points, not strict requirements:

```text
Background:
#F7F8FA

Hero / Intro Surface:
#EAF2FB

Primary Surface:
#FFFFFF

Primary Text:
#202124

Secondary Text:
#686B73

Muted Text:
#92959D

Border:
#E5E7EB

Accent:
#E7F23D

Dark Action:
#2D2D2F

Success:
#2F7D5B

Warning:
#B98524

Error:
#B94A48
```

Do not use every color in every component.

The interface should remain predominantly white, pale blue, gray, and black with the accent used intentionally.

---

# 5. Typography

The typography should feel modern, clean, and slightly editorial.

Recommended primary font:

```text
Inter
```

Alternative:

```text
Plus Jakarta Sans
```

Use a single primary sans-serif family throughout the application.

## Hierarchy

### Hero Heading

Large, confident, but not excessively heavy.

Example:

```text
Know your fit.
Before you apply.
```

or:

```text
See how your stack
matches the job.
```

The heading should use a relatively large font size with comfortable line height.

### Section Heading

Medium-large and strong.

Example:

```text
How it works
```

### Body

Readable and restrained.

Do not use overly small text for important explanatory information.

### Metadata

Small, muted text may be used for:

- "Powered by MIND Tech Skills Ontology"
- Number of technologies detected
- API/result metadata

---

# 6. Page Structure

The primary landing/analyzer page should follow this hierarchy:

```text
┌──────────────────────────────────────────────────────┐
│                    NAVIGATION                        │
│                                                      │
│  Concluded                         How it works      │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│                                                      │
│                 HERO / INTRODUCTION                 │
│                                                      │
│              Know your technical fit.               │
│              Before you apply.                       │
│                                                      │
│      Compare your stack against a job description.  │
│                                                      │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│                                                      │
│                 ANALYZER                             │
│                                                      │
│  Your technology stack                               │
│                                                      │
│  [ React ] [ Node.js ] [ Docker ] [ MySQL ]         │
│                                                      │
│  Search technologies...                              │
│                                                      │
│  Job description                                     │
│  ┌────────────────────────────────────────────────┐  │
│  │ Paste the job description here...               │  │
│  │                                                │  │
│  │                                                │  │
│  └────────────────────────────────────────────────┘  │
│                                                      │
│                 [ Analyze my stack ]                 │
│                                                      │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│                                                      │
│                  RESULT                              │
│                                                      │
│                     75%                              │
│               Technical Match                       │
│                                                      │
│          6 of 8 technologies matched                │
│                                                      │
│  Matched technologies                               │
│  [ React ] [ Node.js ] [ Docker ] ...               │
│                                                      │
│  Missing technologies                                │
│  [ TypeScript ] [ PostgreSQL ] ...                  │
│                                                      │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│                  HOW IT WORKS                        │
│                                                      │
│      01             02              03              │
│   Select your    Paste the JD     Get your          │
│   technologies                  technical match     │
│                                                      │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│             HOW THE TECHNOLOGY WORKS                 │
│                                                      │
│  Explain MIND ontology, normalization, and          │
│  deterministic matching in simple language.         │
│                                                      │
└──────────────────────────────────────────────────────┘
```

The analyzer is the primary focus of the page.

---

# 7. Navigation

Use a simple floating or contained navigation bar inspired by the reference.

Example:

```text
┌────────────────────────────────────────────────────┐
│  [C] Concluded       How it works       [GitHub]   │
└────────────────────────────────────────────────────┘
```

The navigation should:

- Be compact
- Have rounded corners
- Sit comfortably within the page
- Avoid occupying excessive vertical space
- Remain readable on mobile

The product name should be the strongest navigation element.

---

# 8. Hero Section

The hero should establish the product immediately.

Suggested content structure:

```text
Small eyebrow:
TECHNICAL STACK MATCHER

Large heading:
Know your technical fit
before you apply.

Description:
Compare the technologies you already know
with the technologies detected in a job description.

[ Start analyzing ]
```

The hero should not make unsupported claims such as:

```text
"Know if you'll get hired."
"Beat every ATS."
"Get hired faster with AI."
```

Instead, emphasize technical-stack comparison.

A subtle visual treatment such as a pale blue background and rounded lower container can separate the hero from the analyzer.

---

# 9. Technology Stack Selector

This is the first major input and should appear **above the job description**.

## Selected Technologies

Selected technologies are displayed as rounded bubbles/tags.

Example:

```text
Your technology stack

[ React × ] [ Node.js × ] [ Docker × ] [ MySQL × ]

Search technologies...
```

Selected bubbles should be visually distinct but compact.

Example style:

```text
background: light accent / neutral
border: subtle
border-radius: pill
```

The remove control should be small but easy to click.

## Search

The selector should support:

- Typing a technology name
- Searching the backend technology catalog
- Displaying matching technologies
- Selecting one result
- Preventing duplicate selections

Example:

```text
Search technologies...

┌──────────────────────────┐
│ React                    │
│ React Native             │
│ React Router             │
│ React Query              │
└──────────────────────────┘
```

The frontend should not ship the entire MIND ontology unnecessarily.

The intended architecture is:

```text
Search input
     ↓
GET /api/technologies?search=react
     ↓
Express
     ↓
MIND technology index
     ↓
Matching technologies
     ↓
Search dropdown
```

---

# 10. Job Description Input

The job description should appear directly below the technology selector.

Use a large textarea with enough room for a complete job description.

Example:

```text
Job description

┌──────────────────────────────────────────────────┐
│ Paste the full job description here...           │
│                                                  │
│                                                  │
│                                                  │
│                                                  │
└──────────────────────────────────────────────────┘
```

The textarea should:

- Have generous padding
- Have a subtle border
- Have a large enough minimum height
- Allow vertical resizing where appropriate
- Maintain a clear focus state
- Not overwhelm the page with unnecessary controls

Placeholder text should be short and descriptive.

---

# 11. Analyze Action

The primary action should be visually obvious.

```text
[ Analyze my technical match ]
```

Use the dark primary action style with the accent reserved for supporting highlights.

The button should:

- Be large enough to click comfortably
- Clearly indicate the action
- Show a loading state during the API request
- Become disabled while analysis is running

Loading state:

```text
[ Analyzing... ]
```

Do not allow repeated submissions while an analysis is in progress.

---

# 12. API Integration

The frontend must send the exact request shape expected by the current backend.

Current endpoint:

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
  "jobDescription": "Full job description..."
}
```

The client should construct this object directly from:

```text
selected technology bubbles
+
job description textarea
```

Example frontend request:

```js
const response = await fetch('http://localhost:3000/api/analyze', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    techStack,
    jobDescription
  })
});

const result = await response.json();
```

The frontend should not transform the API response into a different conceptual model unnecessarily.

Current response shape:

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

The UI should use these fields directly.

---

# 13. Result Section

The result should become the visual focal point after analysis.

## Score

Display:

```text
75%
Technical Match
```

with supporting context:

```text
6 of 8 detected technologies matched
```

Do not present the percentage as an employability score.

The preferred label is:

```text
Technical Match
```

not:

```text
Qualification
```

## Matched Technologies

Display matched technologies as positive chips:

```text
Matched

[ React ] [ Node.js ] [ Docker ]
```

## Missing Technologies

Display missing technologies separately:

```text
Missing

[ TypeScript ] [ PostgreSQL ] [ AWS ]
```

## Detected Technologies

Optionally allow users to expand:

```text
Detected from this job description
```

This provides transparency into what the parser actually found.

---

# 14. Score Explanation

The score should be explainable directly in the interface.

Example:

```text
How is this score calculated?

Concluded detected 8 technologies in the job description.
You matched 6 of them.

6 ÷ 8 × 100 = 75%
```

This should be accessible near the result rather than hidden behind technical terminology.

Add a disclaimer:

```text
This is a technical-stack match, not a prediction of hiring
outcomes or overall job qualification.
```

---

# 15. How It Works Section

The section should explain the product in three simple steps.

### 01 — Select your stack

```text
Choose the technologies you already know.
Your selections are saved locally in your browser.
```

### 02 — Paste the job description

```text
Paste the job description you want to evaluate.
```

### 03 — See the technical match

```text
Concluded extracts recognized technologies,
compares them against your stack, and shows
what matches and what is missing.
```

Visually:

```text
01                    02                    03

SELECT                PASTE                 CONCLUDE

Your stack            Job description       Technical match
```

Use large numeric labels or subtle step indicators rather than complex illustrations.

---

# 16. How the Technology Matching Works

This section is important because transparency is part of the product identity.

Do not hide the fact that the application uses deterministic matching.

Suggested explanation:

```text
How Concluded works

Concluded does not ask an AI model to guess whether
you're qualified.

It uses the MIND Tech Skills Ontology as a structured
technology knowledge base. The job description is
checked against known technology names and their
synonyms, such as:

React
React.js
ReactJS

These names are normalized to a canonical technology
before the comparison is performed.

Your selected stack is then compared against the
technologies detected in the job description.
```

Visual flow:

```text
Job Description
       ↓
Technology Detection
       ↓
Synonym Normalization
       ↓
Canonical Technologies
       ↓
Compare With Your Stack
       ↓
Technical Match
```

This explanation should be understandable to a non-technical job seeker while still being accurate.

---

# 17. MIND Attribution

Because the application uses the MIND Tech Skills Ontology, provide a small attribution/reference in the technology explanation or footer.

Example:

```text
Technology recognition powered by the
MIND Tech Skills Ontology.
```

The attribution should not dominate the UI.

---

# 18. Local Persistence

The selected technology stack should persist in the browser.

Use:

```text
localStorage
```

The user should not need to reselect their technologies every time they return to the site.

UX behavior:

```text
First visit
    ↓
Select technologies
    ↓
Save locally
    ↓
Return later
    ↓
Restore selected technologies
```

Provide a subtle action such as:

```text
Clear stack
```

so the user remains in control of their stored selections.

No account or database is required for this feature.

---

# 19. Empty States

## No Technologies Selected

Show:

```text
Start with your tech stack

Search and select the technologies you know.
```

The Analyze button should remain disabled until the user has selected at least one technology.

## No Job Description

Show:

```text
Paste a job description to analyze the technical match.
```

The Analyze button should remain disabled until a job description is present.

## No Technologies Detected

If the API detects no known technologies:

```text
No recognized technologies found

Try providing a more complete job description.
```

Do not display:

```text
0% match
```

because that incorrectly implies that technologies were detected but none matched.

---

# 20. Error State

If the API request fails:

```text
Something went wrong

We couldn't analyze this job description.
Please try again.
```

Provide:

```text
[ Try again ]
```

Do not expose raw server errors to the user.

Developer details may still be logged in the browser console during development.

---

# 21. Loading State

During analysis:

```text
Analyzing your technical match...
```

The result area may show a simple skeleton or loading indicator.

Avoid elaborate loading animations.

The interface should communicate that the analysis is deterministic and quick.

---

# 22. Responsive Design

The desktop layout should use the available horizontal space without becoming excessively wide.

Recommended maximum content width:

```text
1100–1200px
```

On desktop:

```text
Navigation
      ↓
Hero
      ↓
Analyzer
      ↓
Result
      ↓
How it works
      ↓
Technology explanation
```

The primary analyzer can use a wide single-column layout because the technology selector and job description have different interaction requirements.

On mobile:

```text
Navigation
      ↓
Hero
      ↓
Tech stack selector
      ↓
Job description
      ↓
Analyze button
      ↓
Result
      ↓
How it works
```

Technology bubbles should wrap naturally.

Do not force a two-column desktop layout if it makes the job description textarea too narrow.

---

# 23. Spacing

Use a consistent spacing scale.

Suggested base:

```text
4px
8px
12px
16px
24px
32px
48px
64px
96px
```

Large sections should have generous vertical spacing.

The interface should feel spacious rather than dense.

---

# 24. Borders and Shadows

Use subtle borders:

```text
1px solid #E5E7EB
```

Shadows should be soft and restrained.

Avoid strong card shadows.

The supplied reference achieves much of its polished appearance through:

- whitespace
- rounded containers
- subtle borders
- soft surfaces

rather than heavy shadows.

---

# 25. Border Radius

Use rounded UI elements consistently.

Suggested values:

```text
Buttons:       999px or 12px
Tech bubbles:  999px
Inputs:        14–18px
Cards:         20–28px
Hero surface:  24–32px
```

Avoid mixing many unrelated radius values.

---

# 26. Interaction Principles

Interactions should feel immediate and subtle.

Technology selection:

```text
Idle
  ↓
Hover
  ↓
Selected
```

Selected technology bubbles should clearly communicate their selected state.

Search dropdowns should:

- Appear close to the search input
- Be keyboard accessible
- Close when clicking outside
- Prevent duplicate selection
- Support keyboard navigation where practical

Buttons should have subtle hover and active states.

Animations should generally be short:

```text
150–250ms
```

Avoid large entrance animations for every component.

---

# 27. Accessibility

The interface should support:

- Keyboard navigation
- Visible focus states
- Semantic buttons
- Proper labels for inputs
- Sufficient text contrast
- Accessible removal controls for technology bubbles
- Screen-reader-friendly result descriptions

Do not communicate important information using color alone.

For example, matched technologies should not rely solely on green.

Use:

```text
Matched
```

and:

```text
Missing
```

labels in addition to visual styling.

---

# 28. Recommended Component Structure

The React application should be organized around the product's actual interaction model.

Possible structure:

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── TechStackSelector.jsx
│   ├── TechBubble.jsx
│   ├── TechSearch.jsx
│   ├── JobDescriptionInput.jsx
│   ├── AnalyzeButton.jsx
│   ├── MatchResult.jsx
│   ├── TechnologyList.jsx
│   ├── HowItWorks.jsx
│   └── TechnologyExplanation.jsx
│
├── hooks/
│   └── useTechStack.js
│
├── services/
│   └── api.js
│
└── App.jsx
```

Keep API communication separate from presentation components.

---

# 29. Frontend API Service

Create a small API service rather than putting fetch logic throughout the UI.

Conceptually:

```js
export async function analyzeJob(techStack, jobDescription) {
  const response = await fetch(
    'http://localhost:3000/api/analyze',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        techStack,
        jobDescription
      })
    }
  );

  if (!response.ok) {
    throw new Error('Failed to analyze job');
  }

  return response.json();
}
```

The component should call:

```js
const result = await analyzeJob(
  techStack,
  jobDescription
);
```

This keeps the UI independent from the HTTP implementation.

---

# 30. Future Browser Extension Compatibility

The web application's analyzer should remain independent from the input source.

Today:

```text
React UI
   ↓
techStack + jobDescription
   ↓
POST /api/analyze
```

Future browser extension:

```text
Job page
   ↓
Browser extension extracts JD
   ↓
techStack + jobDescription
   ↓
POST /api/analyze
```

The backend should not need to know whether the job description came from:

- A textarea
- A URL
- A browser extension
- A scraped page

This keeps the analyzer API reusable.

---

# 31. Design Summary

Concluded should feel like a **minimalist, polished developer utility**, not a conventional enterprise dashboard.

The visual hierarchy is:

```text
             CONCLUDED

       Know your technical fit.
          Before you apply.

                ↓

       YOUR TECHNOLOGY STACK
       [ React ] [ Node.js ] ...

       JOB DESCRIPTION
       ┌─────────────────────┐
       │ Paste JD...         │
       └─────────────────────┘

       [ Analyze my match ]

                ↓

             75%
       Technical Match

       Matched       Missing
       React         TypeScript
       Node.js       PostgreSQL
       Docker        AWS

                ↓

            HOW IT WORKS

       01        02        03
      Select    Paste    Conclude

                ↓

       HOW THE TECHNOLOGY WORKS

       Transparent explanation
       of deterministic matching
       and the MIND ontology.
```

The primary objective of the design is to make the user think:

> **"I can understand this immediately, use it immediately, and I can see exactly why it gave me this result."**
