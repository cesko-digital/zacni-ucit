

//ISCO groups
LOAD CSV FROM 'file:///ESCO/ISCOGroups_en.csv' AS row
MERGE (o:ISCOGroup {uri: row[1], code: row[2],  name: row[3]});

//Competence groups
LOAD CSV FROM 'file:///ESCO/skillGroups_en.csv' AS row WITH row WHERE row[1] CONTAINS "isced"
WITH COLLECT({name: row[2], uri: row[1], isced: split(row[1], '/')[-1]}) AS entries
UNWIND entries as entry
MERGE (o:CompetenceGroup {uri: entry.uri, name: entry.name, isced: entry.isced});


//Competences
LOAD CSV FROM 'file:///ESCO/skills_en.csv' AS row WITH row WHERE row[2] = "skill/competence"
MERGE (o:Competence {uri: row[1], type: "skill", reuse: row[3], name: row[4], description: row[12]});

LOAD CSV FROM 'file:///ESCO/skills_en.csv' AS row WITH row WHERE row[2] = "knowledge"
MERGE (o:Competence {uri: row[1], type: "knowledge", reuse: row[3],  name: row[4], description: row[12]});

//Occupations
LOAD CSV FROM 'file:///ESCO/occupations_en.csv' AS row WITH row WHERE row[12] IS NOT NULL
MERGE (o:Occupation {uri: row[1], name: row[3], description: row[12]});

LOAD CSV FROM 'file:///ESCO/occupations_en.csv' AS row WITH row WHERE row[12] IS NULL
MERGE (o:Occupation {uri: row[1], name: row[3], description: row[3]});

LOAD CSV FROM 'file:///ESCO/occupations_en.csv' AS row WITH row
MATCH (o:Occupation) WHERE  o.uri = row[1]
MATCH (g:ISCOGroup) WHERE  g.code = row[2]
MERGE (o)-[r:BELONGS_TO]->(g);

//Occupation hierarchy
LOAD CSV FROM 'file:///ESCO/broaderRelationsOccPillar.csv' AS row WITH row WHERE row[0] = 'ISCOGroup' AND row[2] = 'ISCOGroup'
MATCH (g:ISCOGroup) WHERE  g.code = row[1]
MATCH (o:ISCOGroup) WHERE  o.code = row[3]
MERGE (g)-[r:MORE_GENERAL_THAN]->(o);

LOAD CSV FROM 'file:///ESCO/broaderRelationsOccPillar.csv' AS row WITH row WHERE row[0] = 'Occupation' AND row[2] = 'ISCOGroup'
MATCH (g:Occupation) WHERE  g.uri = row[1]
MATCH (o:ISCOGroup) WHERE  o.code = row[3]
MERGE (g)-[r:MORE_GENERAL_THAN]->(o);

LOAD CSV FROM 'file:///ESCO/broaderRelationsOccPillar.csv' AS row WITH row WHERE row[0] = 'Occupation' AND row[2] = 'Occupation'
MATCH (g:Occupation) WHERE  g.uri = row[1]
MATCH (o:Occupation) WHERE  o.uri = row[3]
MERGE (g)-[r:MORE_GENERAL_THAN]->(o);


//Skill hierarchy
LOAD CSV FROM 'file:///ESCO/broaderRelationsSkillPillar.csv' AS row WITH row WHERE row[0] = 'SkillGroup' AND row[2] = 'SkillGroup'
MATCH (g:CompetenceGroup) WHERE  g.uri = row[1]
MATCH (o:CompetenceGroup) WHERE  o.uri = row[3]
MERGE (g)-[r:MORE_GENERAL_THAN]->(o);

LOAD CSV FROM 'file:///ESCO/broaderRelationsSkillPillar.csv' AS row WITH row WHERE row[0] = 'KnowledgeSkillCompetence' AND row[2] = 'SkillGroup'
MATCH (g:Competence) WHERE  g.uri = row[1]
MATCH (o:CompetenceGroup) WHERE  o.uri = row[3]
MERGE (g)-[r:MORE_GENERAL_THAN]->(o);

LOAD CSV FROM 'file:///ESCO/broaderRelationsSkillPillar.csv' AS row WITH row WHERE row[0] = 'KnowledgeSkillCompetence' AND row[2] = 'KnowledgeSkillCompetence'
MATCH (g:Competence) WHERE  g.uri = row[1]
MATCH (o:Competence) WHERE  o.uri = row[3]
MERGE (g)-[r:MORE_GENERAL_THAN]->(o);


//Skill skill relations
LOAD CSV FROM 'file:///ESCO/skillSkillRelations.csv' AS row WITH row WHERE row[1] = 'knowledge' AND row[3] = 'knowledge'
MATCH (first:Competence) WHERE  first.uri = row[0]
MATCH (second:Competence) WHERE  second.uri = row[4]
MERGE (first)-[r:RELATED {type: row[1]}]->(second);


//Occupation skill relations
LOAD CSV FROM 'file:///ESCO/occupationSkillRelations.csv' AS row
MATCH (o:Occupation) WHERE  o.uri = row[0]
MATCH (s:Competence) WHERE  s.uri = row[3]
MERGE (o)-[r:NEEDS {type: row[1]}]->(s);






//NIZE JE ZBYTECNE


// Highest level
LOAD CSV FROM 'file:///ESCO/skillsHierarchy_en.csv' AS row WITH row WHERE row[1] = 'skills' AND row[4] IS NULL
MERGE (o:Competence {uri: row[2], name: row[3], type: "skill", level: 1, description: row[8]});

LOAD CSV FROM 'file:///ESCO/skillsHierarchy_en.csv' AS row WITH row WHERE row[1] = 'knowledge' AND row[4] IS NULL AND row[8] IS NULL
MERGE (o:Competence {uri: row[2], name: row[3], type: "knowledge", level: 1, description: row[3]});

LOAD CSV FROM 'file:///ESCO/skillsHierarchy_en.csv' AS row WITH row WHERE row[1] = 'knowledge' AND row[4] IS NULL AND row[8] IS NOT NULL
MERGE (o:Competence {uri: row[2], name: row[3], type: "knowledge", level: 1, description: row[8]});

// Middle level
LOAD CSV FROM 'file:///ESCO/skillsHierarchy_en.csv' AS row WITH row WHERE row[1] = 'skills' AND row[4] IS NOT NULL  AND row[6] IS NULL
MERGE (o:Competence {uri: row[4], name: row[5], type: "skill", level: 2,  description: row[8]});

LOAD CSV FROM 'file:///ESCO/skillsHierarchy_en.csv' AS row WITH row WHERE row[1] = 'knowledge' AND row[4] IS NOT NULL AND row[6] IS NULL AND row[8] IS NULL
MERGE (o:Competence {uri: row[4], name: row[5], type: "knowledge", level: 2,  description: row[5]});

LOAD CSV FROM 'file:///ESCO/skillsHierarchy_en.csv' AS row WITH row WHERE row[1] = 'knowledge' AND row[4] IS NOT NULL AND row[6] IS NULL AND row[8] IS NOT NULL
MERGE (o:Competence {uri: row[4], name: row[5], type: "knowledge", level: 2,  description: row[8]});

// Lowest level
LOAD CSV FROM 'file:///ESCO/skillsHierarchy_en.csv' AS row WITH row WHERE row[1] = 'skills' AND row[6] IS NOT NULL
MERGE (o:Competence {uri: row[6], name: row[7], type: "skill", level: 3,  description: row[8]});

LOAD CSV FROM 'file:///ESCO/skillsHierarchy_en.csv' AS row WITH row WHERE row[1] = 'knowledge' AND row[6] IS NOT NULL AND row[8] IS NULL
MERGE (o:Competence {uri: row[6], name: row[7], type: "knowledge", level: 3,  description: row[7]});

LOAD CSV FROM 'file:///ESCO/skillsHierarchy_en.csv' AS row WITH row WHERE row[1] = 'knowledge' AND row[6] IS NOT NULL AND row[8] IS NOT NULL
MERGE (o:Competence {uri: row[6], name: row[7], type: "knowledge", level: 3,  description: row[8]});

//Hierarchy Highest -> Middle
LOAD CSV FROM 'file:///ESCO/skillsHierarchy_en.csv' AS row WITH row WHERE row[4] IS NOT NULL  AND row[6] IS NULL
MATCH (high:Competence) WHERE  high.uri = row[2]
MATCH (middle:Competence) WHERE  middle.uri = row[4]
MERGE (high)-[r:MORE_GENERAL_THAN]->(middle);

//Hierarchy Middle -> Lowest
LOAD CSV FROM 'file:///ESCO/skillsHierarchy_en.csv' AS row WITH row WHERE row[6] IS NOT NULL
MATCH (middle:Competence) WHERE  middle.uri = row[4]
MATCH (lowest:Competence) WHERE  lowest.uri = row[6]
MERGE (middle)-[r:MORE_GENERAL_THAN]->(lowest);
