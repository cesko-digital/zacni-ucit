MATCH (teachingLevel:SchoolLevel {name: '2. stupeň ZŠ'})<-[:QUALIFIES_FOR]-(qualification:Qualification)
MATCH (teachingSubject:Subject {code: 'M'})-[:IS_PART_OF]->(teachingSubjectGroup:SubjectGroup)<-[:QUALIFIES_FOR]-(qualification)
MATCH (achievedTitle:EducationTitle {name: "Mgr."})<-[:DEFINED_BY]-(type:EducationType)
MATCH (achievedField:CollegeArea {name: "Stavebnictví"})<-[:DEFINED_BY]-(type)
MATCH (exp:OtherExperience {name: 'výkonný či výtvarný umělec'})<-[:COMBINES]-(qualification)
MATCH (qualification)-[:COMBINES]->(type)
RETURN qualification
