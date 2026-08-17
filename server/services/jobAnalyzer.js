import { technologyIndex } from "./technologyService.js";

export function extractTechnologies(jobDescription) {
  const detected = new Map();

  const text = jobDescription.toLowerCase();

  for (const [alias, skill] of technologyIndex) {
    const escapedAlias = alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regex = new RegExp(`(?<![a-z0-9])${escapedAlias}(?![a-z0-9])`, "i");

    const match = text.match(regex);

    if (match) {
      console.log(`Matched "${match[0]}" → ${skill.name} (alias: ${alias})`);

      detected.set(skill.name, skill);
    }
  }

  return [...detected.values()];
}

export function compareTechStack(userStack, detectedTechnologies) {
  const DIRECT_WEIGHT = 1;
  const INFERRED_WEIGHT = 0.5;

  const directTechnologies = new Set();
  const inferredTechnologies = new Set();

  // Direct technologies selected by the user
  for (const technology of userStack) {
    const skill = technologyIndex.get(technology.toLowerCase());

    if (!skill) {
      continue;
    }

    directTechnologies.add(skill.name);

    // Technologies implied by the user's selection
    const impliedSkills = getImpliedSkills(skill);

    for (const impliedSkill of impliedSkills) {
      inferredTechnologies.add(impliedSkill.name);
    }
  }

  const matched = [];
  const inferred = [];
  const missing = [];

  // Compare user's stack against detected JD technologies
  for (const technology of detectedTechnologies) {
    const name = technology.name;

    if (directTechnologies.has(name)) {
      matched.push(name);
    } else if (inferredTechnologies.has(name)) {
      inferred.push(name);
    } else {
      missing.push(name);
    }
  }

  // Calculate score AFTER determining matches
  const directScore = matched.length * DIRECT_WEIGHT;
  const inferredScore = inferred.length * INFERRED_WEIGHT;

  const totalScore = directScore + inferredScore;

  const score =
    detectedTechnologies.length === 0
      ? 0
      : (totalScore / detectedTechnologies.length) * 100;

  return {
    score: Number(score.toFixed(2)),
    matched,
    inferred,
    missing,
    detected: detectedTechnologies.map((technology) => technology.name),
  };
}

export function analyzeJob(userStack, jobDescription) {
  const detectedTechnologies = extractTechnologies(jobDescription);

  return compareTechStack(userStack, detectedTechnologies);
}

function getImpliedSkills(skill, visited = new Set()) {
  if (visited.has(skill.name)) {
    return [];
  }

  visited.add(skill.name);

  const implied = [];

  for (const skillName of skill.impliesKnowingSkills ?? []) {
    const impliedSkill = technologyIndex.get(skillName.toLowerCase());

    if (!impliedSkill) {
      continue;
    }

    implied.push(impliedSkill);

    // Recursively follow relationships
    const nestedSkills = getImpliedSkills(impliedSkill, visited);

    implied.push(...nestedSkills);
  }

  return implied;
}

export function extractResumeTechnologies(resumeText) {
    const detected = new Map();

    const text = resumeText.toLowerCase();

    const GENERIC_ALIASES = new Set([
        'ai',
        'c',
        'front',
        'io',
        'js',
        'page',
        'request',
        'tools'
    ]);

    for (const [alias, skill] of technologyIndex) {
        if (GENERIC_ALIASES.has(alias)) {
            continue;
        }

        const escapedAlias = alias.replace(
            /[.*+?^${}()|[\]\\]/g,
            '\\$&'
        );

        const regex = new RegExp(
            `(?<![a-z0-9])${escapedAlias}(?![a-z0-9])`,
            'i'
        );

        const match = text.match(regex);

        if (match) {
            console.log(
                `Resume match "${match[0]}" → ${skill.name} (alias: ${alias})`
            );

            detected.set(skill.name, skill);
        }
    }

    return [...detected.values()];
}