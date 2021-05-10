MATCH (teachingLevel:SchoolLevel {name: "2. stupeň ZŠ"})<-[:QUALIFIES_FOR]-(qualification:Qualification)
MATCH (teachingSubject:Subject {code: "M"})-[:IS_PART_OF]->(teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
MATCH (achievedTitle:EducationTitle {name: "Mgr."})<-[:DEFINED_BY]-(type:EducationType)
MATCH (achievedField:CollegeArea {name: "Stavebnictví"})<-[:DEFINED_BY]-(type)
MATCH (character:StudyCharacteristic)  WHERE ((teachingSubject)<-[:QUALIFIES_FOR]-(achievedField)<-[:DEFINED_BY]-(type)–[:DEFINED_BY]->(character) AND character.name = 'Odborný') OR character.name <> 'Odborný'
MATCH (toStudy:EducationType)<-[:COMBINES]-(qualification)-[:COMBINES]->(type) WHERE toStudy <> type
RETURN toStudy.name, qualification.rowId


create (achievedField:CollegeArea {name: "Stavebnictví"})-[:QUALIFIES_FOR]->(teachingSubject:Subject {code: "M"})


MATCH (teachingSubject:Subject {code: "M"})-[:IS_PART_OF]->(teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
RETURN teachingSubject, teachingSubjectGroup, qualification

MATCH (teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
RETURN  teachingSubjectGroup, qualification
