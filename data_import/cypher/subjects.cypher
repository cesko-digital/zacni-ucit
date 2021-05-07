//Vytvoreni vztahu pro Skupiny predmetu
LOAD CSV FROM 'file:///subjects.csv' AS row WITH row as row

MATCH (subject:Subject {code: row[1]})
MERGE (group:SubjectGroup {name: row[0]})
MERGE (subject)-[:IS_PART_OF]->(group)
