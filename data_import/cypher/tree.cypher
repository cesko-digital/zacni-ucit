//Vytvoreni vztahu pro Skupiny predmetu
LOAD CSV FROM 'file:///tree.csv' AS row WITH row as row

MERGE (teachingLevel:SchoolLevel {name: row[0]})
MERGE (teachingSubject:Subject {name: row[1]})

MERGE (title1:EducationTitle {name: row[3]})
MERGE (title1Level1:SchoolLevel {name: row[4]})
MERGE (title1Level2:SchoolLevel {name: row[5]})
MERGE (title1Subject:Subject {name: row[6]})
MERGE (title1Field:CollegeArea {name: row[7]})
MERGE (title1Char:StudyCharacteristic {name: row[8]})

MERGE (title2:EducationTitle {name: row[11]})
MERGE (title2Level:SchoolLevel {name: row[12]})
MERGE (title2Subject:Subject {name: row[13]})
MERGE (title2Field:CollegeArea {name: row[14]})
MERGE (title2Char:StudyCharacteristic {name: row[15]})

MERGE (courseLevel:SchoolLevel {name: row[18]})

MERGE (experience1:OtherExperience {name: row[21]})
MERGE (experience2:OtherExperience {name: row[23]})

MERGE (eduTypeTitle1:EducationType {name: row[9], title: row[3], type: "title"})
MERGE (eduTypeTitle2:EducationType {name: row[16], title: row[11], type: "title"})
MERGE (eduTypeCourse:EducationType {name: row[19], type: "course"})

MERGE (eduTypeCourse)-[:DEFINED_BY]->(courseLevel)

MERGE (eduTypeTitle1)-[:DEFINED_BY]->(title1)
MERGE (eduTypeTitle1)-[:DEFINED_BY]->(title1Level2)
MERGE (eduTypeTitle1)-[:DEFINED_BY]->(title1Level1)
MERGE (eduTypeTitle1)-[:DEFINED_BY]->(title1Subject)
MERGE (eduTypeTitle1)-[:DEFINED_BY]->(title1Field)
MERGE (eduTypeTitle1)-[:DEFINED_BY]->(title1Char)

MERGE (eduTypeTitle2)-[:DEFINED_BY]->(title2)
MERGE (eduTypeTitle2)-[:DEFINED_BY]->(title2Level)
MERGE (eduTypeTitle2)-[:DEFINED_BY]->(title2Subject)
MERGE (eduTypeTitle2)-[:DEFINED_BY]->(title2Field)
MERGE (eduTypeTitle2)-[:DEFINED_BY]->(title2Char)

MERGE (qualification:Qualification {legalParagraph: row[25], example: row[27], rowId: row[28]})
MERGE (qualification)-[:COMBINES]->(eduTypeTitle1)
MERGE (qualification)-[:COMBINES]->(eduTypeTitle2)
MERGE (qualification)-[:COMBINES]->(eduTypeCourse)
MERGE (qualification)-[:COMBINES]->(experience1)
MERGE (qualification)-[:COMBINES]->(experience2)
MERGE (qualification)-[:QUALIFIES_FOR]->(teachingLevel)
MERGE (qualification)-[:QUALIFIES_FOR]->(teachingSubject);


MATCH (exp:OtherExperience)
SET exp:EducationType;

MATCH (subject:Subject) WHERE
subject.name CONTAINS 'předměty' OR subject.name CONTAINS 'cizí jazyk' OR subject.name CONTAINS 'tělesná výchova' OR subject.name CONTAINS 'výcvik' OR subject.name CONTAINS 'konverzace'
SET subject:SubjectGroup;

//Connect any study field
MATCH (type:EducationType)-[r]->(old:CollegeArea {name: 'Any'})
MATCH (field:CollegeArea)
WITH type, COLLECT(field) AS fields, COLLECT(type) AS types
FOREACH(f IN fields |
  FOREACH (t IN types |
    MERGE (t)-[:DEFINED_BY]->(f)));

//Connect any subject apart from foreign language
MATCH (type:EducationType)-[r]->(old:Subject {name: 'Any kromě cizí jazyk'})
MATCH (subject:Subject) WHERE subject.name <> 'cizí jazyk'
WITH type, collect(subject) AS subjects, COLLECT(type) AS types
FOREACH(s IN subjects |
  FOREACH (t IN types |
    MERGE (t)-[:DEFINED_BY]->(s)));

//Connect any subject
MATCH (type:EducationType)-[r]->(old:Subject {name: "Any"})
MATCH (subject:Subject)
WITH type, COLLECT(subject) AS subjects, COLLECT(type) AS types
FOREACH(s IN subjects |
  FOREACH (t IN types |
    MERGE (t)-[:DEFINED_BY]->(s)));

//Connect any school level
MATCH (type:EducationType)-[r]->(old:SchoolLevel {name: "Any"})
MATCH (level:SchoolLevel)
WITH type, COLLECT(level) AS levels, COLLECT(type) AS types
FOREACH(l IN levels |
  FOREACH (t IN types |
    MERGE (t)-[:DEFINED_BY]->(l)));


MATCH (node) WHERE node.name IN ["None", "Any", "Any kromě cizí jazyk"]
DETACH DELETE node;


