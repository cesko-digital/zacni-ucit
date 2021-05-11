OPTIONAL MATCH (type)-[:DEFINED_BY]->(character:StudyCharacteristic)
MATCH (toStudy:EducationType)<-[:COMBINES]-(qualification)-[:COMBINES]->(type) WHERE toStudy <> type AND toInteger(qualification.rowId) < 20
RETURN type.name, qualification.rowId, character.name


MATCH (teachingLevel:SchoolLevel {name: "2. stupeň ZŠ"})<-[:QUALIFIES_FOR]-(qualification:Qualification)
MATCH (teachingSubject:Subject {code: "D"})-[:IS_PART_OF]->(teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
MATCH (achievedTitle:EducationTitle {name: "Mgr."})<-[:DEFINED_BY]-(type:EducationType)
MATCH (achievedField:CollegeArea {name: "Stavebnictví"})<-[:DEFINED_BY]-(type)
OPTIONAL MATCH (type)-[:DEFINED_BY]->(character:StudyCharacteristic)  WHERE ((teachingSubject)<-[:QUALIFIES_FOR]-(achievedField)<-[:DEFINED_BY]-(type) AND character.name = 'Odborný') OR character.name <> 'Odborný'
MATCH (toStudy:EducationType)<-[:COMBINES]-(qualification)-[:COMBINES]->(type) WHERE toStudy <> type
RETURN type.name, qualification.rowId, character.name


create (achievedField:CollegeArea {name: "Stavebnictví"})-[:QUALIFIES_FOR]->(teachingSubject:Subject {code: "M"})


MATCH (teachingSubject:Subject {code: "M"})-[:IS_PART_OF]->(teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
RETURN teachingSubject, teachingSubjectGroup, qualification

MATCH (teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
RETURN  teachingSubjectGroup, qualification
