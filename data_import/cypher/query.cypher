MATCH (teachingLevel:SchoolLevel)<-[:QUALIFIES_FOR]-(qualification:Qualification)
MATCH (teachingSubject:Subject)-[:IS_PART_OF]->(teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
MATCH (education:EducationType)<-[:COMBINES]-(qualification)
OPTIONAL MATCH (education)-[:DEFINED_BY]->(title:EducationTitle)
OPTIONAL MATCH (education)-[:DEFINED_BY]->(level:SchoolLevel)
OPTIONAL MATCH (education)-[:DEFINED_BY]->(subject:Subject)
OPTIONAL MATCH (education)-[:DEFINED_BY]->(area:CollegeArea)
OPTIONAL MATCH (education)-[:DEFINED_BY]->(character:StudyCharacteristic)
RETURN qualification.rowId, education.name, title.name, collect(distinct level.name), collect(distinct area.name), character.name, collect(distinct subject.name)
  ORDER BY toInteger(qualification.rowId)


MATCH (teachingLevel:SchoolLevel {name: "2. stupeň ZŠ"})<-[:QUALIFIES_FOR]-(qualification:Qualification)
MATCH (teachingSubject:Subject {code: "D"})-[:IS_PART_OF]->(teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
MATCH (achievedTitle:EducationTitle {name: "Mgr."})<-[:DEFINED_BY]-(type:EducationType)
MATCH (achievedField:CollegeArea {name: "Stavebnictví"})<-[:DEFINED_BY]-(type)
OPTIONAL MATCH (type)-[:DEFINED_BY]->(character:StudyCharacteristic)  WHERE ((teachingSubject)<-[:QUALIFIES_FOR]-(achievedField)<-[:DEFINED_BY]-(type) AND character.name = 'Odborný') OR character.name <> 'Odborný'
MATCH (toStudy:EducationType)<-[:COMBINES]-(qualification)-[:COMBINES]->(type) WHERE toStudy <> type
RETURN qualification


MATCH (teachingLevel:SchoolLevel {name: "2. stupeň ZŠ"})<-[:QUALIFIES_FOR]-(qualification:Qualification)
MATCH (teachingSubject:Subject {code: "D"})-[:IS_PART_OF]->(teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
MATCH (achievedTitle:EducationTitle {name: "Mgr."})<-[:DEFINED_BY]-(type:EducationType)
MATCH (achievedField:CollegeArea {name: "Stavebnictví"})<-[:DEFINED_BY]-(type)
MATCH (toStudy:EducationType)<-[:COMBINES]-(qualification)-[:COMBINES]->(type) WHERE toStudy <> type
RETURN qualification

MATCH (teachingLevel:SchoolLevel {name: "2. stupeň ZŠ"})<-[:QUALIFIES_FOR]-(qualification:Qualification)
MATCH (teachingSubject:Subject {code: "VV"})-[:IS_PART_OF]->(teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
MATCH (exp:EducationType {name: "výkonný či výtvarný umělec"})<-[:COMBINES]-(qualification)
RETURN qualification


create (achievedField:CollegeArea {name: "Stavebnictví"})-[:QUALIFIES_FOR]->(teachingSubject:Subject {code: "M"})


MATCH (teachingSubject:Subject {code: "M"})-[:IS_PART_OF]->(teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
RETURN teachingSubject, teachingSubjectGroup, qualification

MATCH (teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
RETURN  teachingSubjectGroup, qualification
