export type TeacherType = {
  id: string;
  attributes: {
    email: string;
    metadata: {
      firstName: string;
      lastName: string;
    };
  };
};
export type POC = {
  childrenOfAge: string;
  selectedSubjects: Array<{ subjectName: string; checked: boolean }>;
};
