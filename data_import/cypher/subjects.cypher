//Vytvoreni vztahu pro Skupiny predmetu
LOAD CSV FROM 'file:///subjects.csv' AS row WITH row as row

MERGE (group:SubjectGroup {name: row[0]})
MERGE (subject:Subject {name: row[1]})
MERGE (subject)-[:IS_PART_OF]->(group)
