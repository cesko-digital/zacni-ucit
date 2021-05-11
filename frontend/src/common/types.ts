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
  degree: string;
  selectedSubjects: Array<{ subjectName: string; checked: boolean }>;
};
