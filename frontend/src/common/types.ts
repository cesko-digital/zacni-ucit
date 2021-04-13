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
