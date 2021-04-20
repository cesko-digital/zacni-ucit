//Vytvoreni vztahu pro Skupiny predmetu
LOAD CSV FROM 'file:///tree.csv' AS row

MERGE (teachingLevel:SchoolLevel {name: row[0]})
MERGE (teachingSubject:Subject {name: row[1]})

MERGE (title1:EducationTitle {name: row[3]})
MERGE (title1Level1:SchoolLevel {name: row[4]})
MERGE (title1Level2:SchoolLevel {name: row[5]})
MERGE (title1Subject:Subject {name: row[6]})
MERGE (title1Field:StudyField {name: row[7]})
MERGE (title1Char:StudyCharacteristic {name: row[8]})
MERGE (title2:EducationTitle {name: row[11]})
MERGE (title2Level:SchoolLevel {name: row[12]})
MERGE (title2Subject:Subject {name: row[13]})
MERGE (title2Field:StudyField {name: row[14]})
MERGE (title2Char:StudyCharacteristic {name: row[15]})
MERGE (courseLevel:SchoolLevel {name: row[18]})

MERGE (experience1:OtherExperience {name: row[21]})
MERGE (experience2:OtherExperience {name: row[23]})

MERGE (eduTypeTitle2:EducationType {name: row[9]})
MERGE (eduTypeTitle1:EducationType {name: row[16]})
MERGE (eduTypeCourse:EducationType {name: row[19]})

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
MERGE (qualification)-[:COMBINES]->(experience1)
MERGE (qualification)-[:COMBINES]->(experience2)
MERGE (qualification)-[:QUALIFIES_FOR]->(teachingLevel)
MERGE (qualification)-[:QUALIFIES_FOR]->(teachingSubject);




MATCH (subject:Subject) WHERE
subject.name CONTAINS "předměty" OR subject.name CONTAINS "jazyk"
SET subject:SubjectGroup;

//Connect any study field
LOAD CSV FROM 'file:///tree.csv' AS row WITH row WHERE row[7] = "Any"
MATCH (title:EducationTitle {name: row[9]})
MERGE (title)-[:DEFINED_BY]->(field:StudyField);



LOAD CSV FROM 'file:///tree.csv' AS row WITH row WHERE row[14] = "Any"
MATCH (title:EducationTitle {name: row[16]})
MERGE (title)-[:DEFINED_BY]->(field:StudyField);

//Connect any subject
LOAD CSV FROM 'file:///tree.csv' AS row WITH row WHERE row[6] = "Any"
MATCH (title:EducationTitle {name: row[9]})
MERGE (title)-[:DEFINED_BY]->(subject:Subject);

LOAD CSV FROM 'file:///tree.csv' AS row WITH row WHERE row[6] = "Any kromě cizí jazyk"
MATCH (title:EducationTitle {name: row[9]})
MATCH (subject:Subject) WHERE subject.name <> "cizí jazyk"
MERGE (title)-[:DEFINED_BY]->(subject);

LOAD CSV FROM 'file:///tree.csv' AS row WITH row WHERE row[13] = "Any"
MATCH (title:EducationTitle {name: row[16]})
MERGE (title)-[:DEFINED_BY]->(subject:Subject);


//Connect any school level
LOAD CSV FROM 'file:///tree.csv' AS row WITH row WHERE row[4] = "Any"
MATCH (title:EducationTitle {name: row[9]})
MERGE (title)-[:DEFINED_BY]->(subject:SchoolLevel);

LOAD CSV FROM 'file:///tree.csv' AS row WITH row WHERE row[5] = "Any"
MATCH (title:EducationTitle {name: row[9]})
MERGE (title)-[:DEFINED_BY]->(subject:SchoolLevel);

LOAD CSV FROM 'file:///tree.csv' AS row WITH row WHERE row[12] = "Any"
MATCH (title:EducationTitle {name: row[16]})
MERGE (title)-[:DEFINED_BY]->(subject:SchoolLevel);

LOAD CSV FROM 'file:///tree.csv' AS row WITH row WHERE row[18] = "Any"
MATCH (title:EducationTitle {name: row[19]})
MERGE (title)-[:DEFINED_BY]->(subject:SchoolLevel);


MATCH (node) WHERE node.name IN ["None", "Any", "Any kromě cizí jazyk"]
DETACH DELETE node;


