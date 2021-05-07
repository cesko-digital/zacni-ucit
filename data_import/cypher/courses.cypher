//Vytvoreni vztahu pro Skupiny predmetu
MERGE (presentForm:FormOfStudy {name: 'present'})
MERGE (distantForm:FormOfStudy {name: 'distant'})
MERGE (combinedForm:FormOfStudy {name: 'combined'})

LOAD CSV FROM 'file:///courses.csv' AS row WITH row as row

MERGE (program:StudyProgram {type: row[0], name: row[7], price: row[10], SDS: row[12], note: row[17], link: row[16]})
MERGE (university:University {name: row[8]})
MERGE (faculty:Faculty {name: row[9], city: row[11]})

CASE row[13] WHEN '1' THEN (MERGE (program)-[:HAS_FORM]->(presentForm))END

//MERGE (title:EducationTitle {name: row[1]})
//MERGE (title:CollegeArea {name: row[5]})
//MERGE (title:OtherExperience {name: row[6]})




